import callBound from "call-bind/callBound";

// Used as the value when calling `Set.prototype.has`.
const MARKER = {};

const $has = callBound("%Set.prototype.has%");

/**
 * Determine whether the payload is a `Set` object.
 *
 * @since 0.0.1
 * 
 * @param payload The value to determine.
 * @returns The assertion result.
 */
export default function isSet(payload: unknown): payload is Set<unknown>
{
    try { $has(payload, MARKER); } catch { return false; }
    return true;
}
