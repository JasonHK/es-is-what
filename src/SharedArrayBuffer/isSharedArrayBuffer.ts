import callBound from "call-bind/callBound";

const $byteLength = callBound("%SharedArrayBuffer.prototype.byteLength%", true);

/**
 * Determine whether the payload is an `SharedArrayBuffer` instance.
 *
 * @since 0.0.1
 *
 * @param payload The value to determine.
 * @returns The assertion result.
 */
export default function isSharedArrayBuffer(payload: unknown): payload is SharedArrayBuffer
{
    if (!$byteLength) { return false; }

    try { $byteLength(payload as SharedArrayBuffer); } catch { return false; }
    return true;
}
