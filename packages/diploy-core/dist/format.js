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
export function cleanPhoneNumber(phone) {
    return phone.replace(/\D/g, "");
}
export function formatPhoneNumber(phone) {
    const cleaned = cleanPhoneNumber(phone);
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
}
export function normalizePhoneNumber(phone) {
    const cleaned = cleanPhoneNumber(phone);
    if (cleaned.startsWith("0")) {
        return cleaned.substring(1);
    }
    return cleaned;
}
export function truncateText(text, maxLength, suffix = "...") {
    if (text.length <= maxLength)
        return text;
    return text.substring(0, maxLength - suffix.length) + suffix;
}
export function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
export function formatBytes(bytes, decimals = 2) {
    if (bytes === 0)
        return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i];
}
export function extractTemplateVariables(template) {
    const matches = template.match(/\{\{(\d+)\}\}/g) || [];
    const variables = [];
    matches.forEach((match) => {
        const num = parseInt(match.replace("{{", "").replace("}}", ""), 10);
        variables[num - 1] = `Variable ${num}`;
    });
    return variables;
}
