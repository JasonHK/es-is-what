import callBound from "call-bind/callBound";

import type BoxedPrimitive from "../Primitive/BoxedPrimitive";

import isNumber from "./isNumber";

const $valueOf = callBound("%Number.prototype.valueOf%");

export default function isNumberObject(payload: unknown): payload is BoxedPrimitive<Number>
{
    if (isNumber(payload)) { return false; }

    try { $valueOf(payload); } catch { return false; }
    return true;
}
