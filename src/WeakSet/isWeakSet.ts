import callBound from "call-bind/callBound";

// Used as the value when calling `WeakSet.prototype.has`.
const MARKER = {};

const $has = callBound("%WeakSet.prototype.has%");

/**
 * Determine whether the payload is a `WeakSet` object.
 *
 * @since 0.0.1
 * 
 * @param payload The value to determine.
 * @returns The assertion result.
 */
export default function isWeakSet(payload: unknown): payload is WeakSet<object>
{
    try { $has(payload, MARKER); } catch { return false; }
    return true;
}
