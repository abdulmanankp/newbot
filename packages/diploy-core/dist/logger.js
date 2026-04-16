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
import { DIPLOY_PRODUCT_NAME, DIPLOY_VERSION } from "./constants";
const LOG_COLORS = {
    info: "\x1b[36m",
    warn: "\x1b[33m",
    error: "\x1b[31m",
    debug: "\x1b[90m",
    success: "\x1b[32m",
};
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
function formatTimestamp() {
    return new Date().toISOString().replace("T", " ").substring(0, 19);
}
function logMessage(level, message, ...args) {
    const color = LOG_COLORS[level];
    const prefix = `${color}[${DIPLOY_PRODUCT_NAME}]${RESET} ${BOLD}${formatTimestamp()}${RESET} ${color}[${level.toUpperCase()}]${RESET}`;
    console.log(`${prefix} ${message}`, ...args);
}
export const diployLogger = {
    info: (message, ...args) => logMessage("info", message, ...args),
    warn: (message, ...args) => logMessage("warn", message, ...args),
    error: (message, ...args) => logMessage("error", message, ...args),
    debug: (message, ...args) => logMessage("debug", message, ...args),
    success: (message, ...args) => logMessage("success", message, ...args),
    banner: () => {
        const line = "═".repeat(52);
        console.log(`\n\x1b[32m╔${line}╗`);
        console.log(`║                                                    ║`);
        console.log(`║   ██████╗ ██╗██████╗ ██╗      ██████╗ ██╗   ██╗   ║`);
        console.log(`║   ██╔══██╗██║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝   ║`);
        console.log(`║   ██║  ██║██║██████╔╝██║     ██║   ██║ ╚████╔╝    ║`);
        console.log(`║   ██║  ██║██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝     ║`);
        console.log(`║   ██████╔╝██║██║     ███████╗╚██████╔╝   ██║      ║`);
        console.log(`║   ╚═════╝ ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝      ║`);
        console.log(`║                                                    ║`);
        console.log(`║   WhatsApp Marketing Platform  v${DIPLOY_VERSION.padEnd(18)}║`);
        console.log(`║   © Bisht Technologies Pvt Ltd                     ║`);
        console.log(`║   https://diploy.in                                ║`);
        console.log(`║                                                    ║`);
        console.log(`╚${line}╝${RESET}\n`);
    },
};
