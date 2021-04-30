import callBound from "call-bind/callBound";

const $byteLength = callBound("%ArrayBuffer.prototype.byteLength%");

/**
 * Determine whether the payload is an `ArrayBuffer` object.
 *
 * @since 0.0.1
 *
 * @param payload The value to determine.
 * @returns The assertion result.
 */
export default function isArrayBuffer(payload: unknown): payload is ArrayBuffer
{
    try { $byteLength(payload as ArrayBuffer); } catch { return false; }
    return true;
}
