import callBound from "call-bind/callBound";

import noopFalse from "../_helpers/noopFalse";

interface IsSharedArrayBuffer
{
    /**
     * Determine whether the payload is an `SharedArrayBuffer` object.
     *
     * @since 0.0.1
     *
     * @param payload The value to determine.
     * @returns The assertion result.
     */
    (payload: unknown): payload is SharedArrayBuffer;
}

const $byteLength = callBound("%SharedArrayBuffer.prototype.byteLength%", true);

/**
 * Determine whether the payload is an `SharedArrayBuffer` object.
 *
 * @since 0.0.1
 */
let isSharedArrayBuffer: IsSharedArrayBuffer;

if ($byteLength)
{
    isSharedArrayBuffer = (function isSharedArrayBuffer(payload): boolean
    {
        try { $byteLength(payload as SharedArrayBuffer); } catch { return false; }
        return true;
    }) as IsSharedArrayBuffer;
}
else
{
    isSharedArrayBuffer = noopFalse as IsSharedArrayBuffer;
}

export default isSharedArrayBuffer;
