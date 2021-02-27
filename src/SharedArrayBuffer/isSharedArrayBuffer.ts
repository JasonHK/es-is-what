import callBound from "call-bind/callBound";

import noopFalse from "../_helpers/noopFalse";

interface IsSharedArrayBuffer
{
    (payload: unknown): payload is SharedArrayBuffer;
}

const $byteLength = callBound("%SharedArrayBuffer.prototype.byteLength%", true);

let isSharedArrayBuffer: IsSharedArrayBuffer;
if ($byteLength)
{
    isSharedArrayBuffer = ((payload): boolean =>
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
