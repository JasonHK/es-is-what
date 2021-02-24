import callBound from "call-bind/callBound";

import type BoxedPrimitive from "../Primitive/BoxedPrimitive";

import isString from "./isString";

const $valueOf = callBound("%String.prototype.valueOf%");

export default function isStringObject(payload: unknown): payload is BoxedPrimitive<String>
{
    if (isString(payload)) { return false; }

    try { $valueOf(payload); } catch { return false; }
    return true;
}
