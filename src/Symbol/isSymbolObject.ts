import callBound from "call-bind/callBound";

import type BoxedPrimitive from "../Primitive/BoxedPrimitive";

import isSymbol from "./isSymbol";

const $valueOf = callBound("%Symbol.prototype.valueOf%");

export default function isSymbolObject(payload: unknown): payload is BoxedPrimitive<Symbol>
{
    if (isSymbol(payload)) { return false; }

    try { $valueOf(payload); } catch { return false; }
    return true;
}
