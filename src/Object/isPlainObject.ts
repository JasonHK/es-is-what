import callBound from "call-bind/callBound";

import isNull from "../Null/isNull";

import isObjectType from "./isObjectType";
import type ObjectType from "./ObjectType";

const $hasOwnProperty = callBound("%Object.prototype.hasOwnProperty%");

/**
 * Determine whether the payload is a plain object or not.
 * 
 * @remarks
 * Plain object means the prototype of the object is either `null` or `Object.prototype`.
 * 
 * @since 0.0.1
 * 
 * @template T The expected type of the plain object.
 * @param payload An object to be determined.
 * @return The assertion result.
 */
export default function isPlainObject<T extends object = ObjectType>(payload: unknown): payload is T
{
    if (!isObjectType(payload)) { return false; }

    const prototype = Object.getPrototypeOf(payload);
    return (isNull(prototype) || $hasOwnProperty(prototype, "hasOwnProperty"));
}
