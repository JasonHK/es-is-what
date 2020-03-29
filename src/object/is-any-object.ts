"use strict";

import { IObject } from "./interfaces/object";

import { isAnyFunction } from "../function/is-any-function";
import { IAnyFunction } from "../function/interfaces/any-function";

import { isObject } from "./is-object";

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
export function isAnyObject<T extends object = (IObject | IAnyFunction)>(payload: unknown): payload is T
{
    return (isObject(payload) || isAnyFunction(payload));
}
