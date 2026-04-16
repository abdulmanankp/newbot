/**
 * ============================================================
 * © 2025 Diploy — a brand of Bisht Technologies Private Limited
 * Original Author: BTPL Engineering Team
 * Website: https://diploy.in
 * Contact: cs@diploy.in
 *
 * Distributed under the Envato / CodeCanyon License Agreement.
 * Licensed to the purchaser for use as defined by the
 * Envato Market (CodeCanyon) Regular or Extended License.
 *
 * You are NOT permitted to redistribute, resell, sublicense,
 * or share this source code, in whole or in part.
 * Respect the author's rights and Envato licensing terms.
 * ============================================================
 */
import { HTTP_STATUS, DIPLOY_HEADER_KEY, DIPLOY_HEADER_VALUE } from "./constants";
function setBrandHeader(res) {
    if (!res.headersSent) {
        res.setHeader(DIPLOY_HEADER_KEY, DIPLOY_HEADER_VALUE);
    }
}
export class DiployResponse {
    static success(res, data, message, statusCode = HTTP_STATUS.OK) {
        setBrandHeader(res);
        const body = {
            success: true,
            ...(message && { message }),
            ...(data !== undefined && { data }),
        };
        return res.status(statusCode).json(body);
    }
    static created(res, data, message = "Resource created successfully") {
        return DiployResponse.success(res, data, message, HTTP_STATUS.CREATED);
    }
    static paginated(res, data, total, page, limit, message) {
        setBrandHeader(res);
        const totalPages = Math.ceil(total / limit);
        const body = {
            success: true,
            ...(message && { message }),
            data,
            meta: { page, limit, total, totalPages },
        };
        return res.status(HTTP_STATUS.OK).json(body);
    }
    static error(res, message = "An error occurred", statusCode = HTTP_STATUS.INTERNAL_ERROR, errors) {
        setBrandHeader(res);
        const body = {
            success: false,
            message,
            ...(errors && { errors }),
        };
        return res.status(statusCode).json(body);
    }
    static noContent(res) {
        setBrandHeader(res);
        return res.status(HTTP_STATUS.NO_CONTENT).send();
    }
}
