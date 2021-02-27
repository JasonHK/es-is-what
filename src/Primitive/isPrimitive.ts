import type { Primitive } from "type-fest";

import isBigInt from "../BigInt/isBigInt";
import isBoolean from "../Boolean/isBoolean";
import isNull from "../Null/isNull";
import isNumber from "../Number/isNumber";
import isString from "../String/isString";
import isSymbol from "../Symbol/isSymbol";
import isUndefined from "../Undefined/isUndefined";

/**
 * Determine whether the payload is a primitive value or not.
 * 
 * @remarks
 * Primitive means the payload is not an object and has no methods.
 * 
 * @remarks
 * The primitive types JavaScript currently have were:
 * 
 * - `bigint`
 * - `boolean`
 * - `null`
 * - `number`
 * - `string`
 * - `symbol`
 * - `undefined`
 * 
 * @since 0.0.1
 * 
 * @param payload An value to be determined.
 * @returns The assertion result.
 * 
 * @example
 * isPrimitive(false);
 * // > true
 * 
 * isPrimitive(1337);
 * // > true
 * 
 * isPrimitive("Hello, world!");
 * // > true
 * 
 * isPrimitive({});
 * // > false
 */
export default function isPrimitive(payload: unknown): payload is Primitive
{
    return (
        isUndefined(payload) ||
        isNull(payload)      ||
        isBoolean(payload)   ||
        isString(payload)    ||
        isSymbol(payload)    ||
        isNumber(payload)    ||
        isBigInt(payload)
    );
}
