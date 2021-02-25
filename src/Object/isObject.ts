import callBound from "call-bind/callBound";

import isNullLike from "../Null/isNullLike";
import type Callable from "../Function/Callable";

import type ObjectType from "./ObjectType";

type Object = ObjectType | (ObjectType & Callable);

const $valueOf = callBound("%Object.prototype.valueOf%");

/**
 * Determine whether the payload is or is not a non-primitive object or
 * function.
 * 
 * @remarks
 * `null` is not considered as a non-primitive object.
 * 
 * @since 0.0.1
 * 
 * @template T The expected type of the object.
 * @param payload An object to be determined.
 * @return The assertion result.
 */
export default function isObject<T extends object = Object>(payload: unknown): payload is T
{
    if (isNullLike(payload)) { return false; }
    
    switch (typeof payload)
    {
        case "string":
        case "number":
        case "boolean":
        case "symbol":
        case "bigint":
            return false;

        case "object":
        case "function":
            return true;

        case "undefined":
        default:
            try { return ($valueOf(payload) === payload); } catch { return false; }
    }
}
