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
export declare class DiployError extends Error {
    readonly statusCode: number;
    readonly isOperational: boolean;
    readonly code: string;
    constructor(statusCode: number, message: string, isOperational?: boolean, code?: string);
}
export declare class BadRequestError extends DiployError {
    constructor(message?: string);
}
export declare class UnauthorizedError extends DiployError {
    constructor(message?: string);
}
export declare class ForbiddenError extends DiployError {
    constructor(message?: string);
}
export declare class NotFoundError extends DiployError {
    constructor(message?: string);
}
export declare class ConflictError extends DiployError {
    constructor(message?: string);
}
export declare class ValidationError extends DiployError {
    readonly errors: Record<string, string[]>;
    constructor(message?: string, errors?: Record<string, string[]>);
}
export declare class RateLimitError extends DiployError {
    constructor(message?: string);
}
export declare class InternalError extends DiployError {
    constructor(message?: string);
}
//# sourceMappingURL=errors.d.ts.map