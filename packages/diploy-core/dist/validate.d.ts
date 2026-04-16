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
import type { Request, Response, NextFunction } from "express";
export declare function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>): (req: Request, res: Response, next: NextFunction) => void;
export declare function validateRequired(obj: Record<string, any>, fields: string[]): {
    valid: boolean;
    missing: string[];
};
export declare function validateCSVRow(row: any, requiredFields: string[]): {
    valid: boolean;
    errors: string[];
};
export declare function isValidEmail(email: string): boolean;
export declare function isValidPhoneNumber(phone: string): boolean;
export declare function sanitizeInput(input: string): string;
//# sourceMappingURL=validate.d.ts.map