import callBound from "call-bind/callBound";

import type BoxedPrimitive from "../Primitive/BoxedPrimitive";

import isBoolean from "./isBoolean";

const $valueOf = callBound("%Boolean.prototype.valueOf%");

export function isBooleanObject(payload: unknown): payload is BoxedPrimitive<Boolean>
{
    if (isBoolean(payload)) { return false; }

    try { $valueOf(payload); } catch { return false; }
    return true;
}

export default isBooleanObject;
