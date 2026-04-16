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
import type { Response } from "express";
import { HTTP_STATUS } from "./constants";
export interface DiployApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    errors?: Record<string, string[]>;
    meta?: {
        page?: number;
        limit?: number;
        total?: number;
        totalPages?: number;
    };
}
export declare class DiployResponse {
    static success<T>(res: Response, data?: T, message?: string, statusCode?: (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS]): Response;
    static created<T>(res: Response, data?: T, message?: string): Response;
    static paginated<T>(res: Response, data: T[], total: number, page: number, limit: number, message?: string): Response;
    static error(res: Response, message?: string, statusCode?: 500, errors?: Record<string, string[]>): Response;
    static noContent(res: Response): Response;
}
//# sourceMappingURL=response.d.ts.map