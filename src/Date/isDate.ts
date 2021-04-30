import callBound from "call-bind/callBound";

const $valueOf = callBound("%Date.prototype.valueOf%");

/**
 * Determine whether the payload is a `Date` object.
 *
 * @since 0.0.1
 *
 * @param payload The value to determine.
 * @returns The assertion result.
 *
 * @example
 * ```ts
 * isDate(new Date());
 * // > true
 *
 * isDate(Date());
 * // > false
 *
 * isDate(Date.now());
 * // > false
 * ```
 */
export default function isDate(payload: unknown): payload is Date
{
    try { $valueOf(payload); } catch { return false; }
    return true;
}
