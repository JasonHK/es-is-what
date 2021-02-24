import callBound from "call-bind/callBound";

import noopFalse from "../_helpers/noopFalse";
import type BoxedPrimitive from "../Primitive/BoxedPrimitive";

import isBigInt from "./isBigInt";

interface IsBigIntObject
{
    (payload: unknown): payload is BoxedPrimitive<BigInt>;
}

const $valueOf = callBound("%BigInt.prototype.valueOf%", true);

export let isBigIntObject: IsBigIntObject;
if ($valueOf)
{
    isBigIntObject = (payload): payload is BoxedPrimitive<BigInt> =>
    {
        if (isBigInt(payload)) { return false; }

        try { $valueOf(payload); } catch { return false; }
        return true;
    };
}
else
{
    isBigIntObject = noopFalse as IsBigIntObject;
}

export default isBigIntObject;
