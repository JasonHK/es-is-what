"use strict";

import { isNull } from "../null/is-null";

import { isObject } from "./is-object";

import { IObject } from "./interfaces/object";

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
export function isPlainObject<T extends object = IObject>(payload: unknown): payload is T
{
    if (!isObject(payload)) { return false; }

    const prototype = Reflect.getPrototypeOf(payload);
    return (isNull(prototype) || (prototype === Object.prototype));
}
