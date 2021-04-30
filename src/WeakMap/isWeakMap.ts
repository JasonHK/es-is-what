import callBound from "call-bind/callBound";

// Used as the key when calling `WeakMap.prototype.has`.
const MARKER = {};

const $has = callBound("%WeakMap.prototype.has%");

/**
 * Determine whether the payload is a `WeakMap` object.
 *
 * @since 0.0.1
 * 
 * @param payload The value to determine.
 * @returns The assertion result.
 */
export default function isWeakMap(payload: unknown): payload is WeakMap<object, unknown>
{
    try { $has(payload, MARKER); } catch { return false; }
    return true;
}
