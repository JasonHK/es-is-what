"use strict";

import { isObject } from "../object/is-object";

import { isArrayLike } from "./is-array-like";
import { IArrayLikeObject } from "./interfaces/array-like-object";

/**
 * Determine whether the payload is an array-like object or not.
 * 
 * @remarks
 * Array-like means the payload is not a function and has the `length` property which is an integer
 * between `0` and `Number.MAX_SAFE_INTEGER` (inclusive).
 * 
 * @since 0.0.1
 * 
 * @template T The expected type of the array-like object.
 * @param payload An value to be determined.
 * @returns The assertion result.
 * 
 * @example
 * isArray([]);
 * // > true
 * 
 * isArray(new Uint8Array());
 * // > true
 * 
 * isArray("Hello, world!");
 * // > false
 * 
 * isArray({});
 * // > false
 */
export function isArrayLikeObject<T extends IArrayLikeObject = IArrayLikeObject>(payload: unknown): payload is T
{
    return (isObject(payload) && isArrayLike(payload));
}
