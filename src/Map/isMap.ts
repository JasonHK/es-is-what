import callBound from "call-bind/callBound";

// Used as the key when calling `Map.prototype.has`.
const MARKER = {};

const $has = callBound("%Map.prototype.has%");

/**
 * Determine whether the payload is a `Map` object.
 *
 * @since 0.0.1
 * 
 * @param payload The value to determine.
 * @returns The assertion result.
 */
export default function isMap(payload: unknown): payload is Map<unknown, unknown>
{
    try { $has(payload, MARKER); } catch { return false; }
    return true;
}
