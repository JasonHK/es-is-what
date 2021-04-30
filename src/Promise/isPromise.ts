import callBound from "call-bind/callBound";

const $then = callBound("%Promise.prototype.then%");

/**
 * Determine whether the payload is a `Promise` object.
 *
 * @since 0.0.1
 * 
 * @param payload The value to determine.
 * @returns The assertion result.
 */
export default function isPromise(payload: unknown): payload is Promise<unknown>
{
    try { $then(payload); } catch { return false; }
    return true;
}
