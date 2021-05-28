import callBound from "call-bind/callBound";

/**
 * Used as the key when calling `Map.prototype.has`.
 */
const MARKER = {};

/**
 * Returns a boolean indicating whether an element with the specified key exists or not.
 * 
 * An error will be thrown if `this` did not have the `[[MapData]]` internal slot.
 * 
 * @see https://tc39.es/ecma262/#sec-map.prototype.has
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
 */
const $has = callBound("%Map.prototype.has%");

/**
 * Determine whether the payload is a `Map` instance.
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
