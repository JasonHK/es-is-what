import callBound from "call-bind/callBound";

/**
 * The call-bound version of the [`ArrayBuffer.prototype.byteLength`](https://tc39.es/ecma262/#sec-get-arraybuffer.prototype.bytelength)
 * get accessor.
 * 
 * Used to check for the existence of the `[[ArrayBufferData]]` internal slot, and the result of
 * [`IsSharedArrayBuffer(obj)`](https://tc39.es/ecma262/#sec-issharedarraybuffer) abstract operation.
 */
const $byteLength = callBound("%ArrayBuffer.prototype.byteLength%");

export default function isArrayBuffer(payload: unknown): payload is ArrayBuffer
{
    // Check for the existence of the `[[ArrayBufferData]]` internal slot, and the result of
    // [`IsSharedArrayBuffer(obj)`] abstract operation.
    try { $byteLength(payload as ArrayBuffer); } catch { return false; }

    return true;
}
