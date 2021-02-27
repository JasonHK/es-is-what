import isBigIntObject from "../BigInt/isBigIntObject";
import isBooleanObject from "../Boolean/isBooleanObject";
import isNumberObject from "../Number/isNumberObject";
import isStringObject from "../String/isStringObject";
import isSymbolObject from "../Symbol/isSymbolObject";

import type BoxedPrimitive from "./BoxedPrimitive";

export default function isBoxedPrimitive(payload: unknown): payload is BoxedPrimitive
{
    return (
        isBooleanObject(payload) ||
        isStringObject(payload)  ||
        isSymbolObject(payload)  ||
        isNumberObject(payload)  ||
        isBigIntObject(payload)
    );
}
