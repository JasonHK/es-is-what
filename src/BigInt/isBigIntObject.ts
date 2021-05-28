import callBound from "call-bind/callBound";

import type BoxedPrimitive from "../Primitive/BoxedPrimitive";

import isBigInt from "./isBigInt";

const $valueOf = callBound("%BigInt.prototype.valueOf%", true);

export default function isBigIntObject(payload: unknown): payload is BoxedPrimitive<BigInt>
{
    if (!$valueOf || isBigInt(payload)) { return false; }

    try { $valueOf(payload); } catch { return false; }
    return true;
}
