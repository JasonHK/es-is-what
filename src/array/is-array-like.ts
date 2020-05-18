"use strict";

import { isNullLike } from "../null/is-null-like";
import { isAnyFunction } from "../function/is-any-function";

import { IArrayLike } from "./interfaces/array-like";
import { isValidLength } from "./utilities/is-valid-length";

/**
 * Determine whether the payload is an array-like value or not.
 * 
 * @notes
 * Array-like means the payload is not a function and has the `length` property which is an integer
 * between `0` and `Number.MAX_SAFE_INTEGER` (inclusive).
 * 
 * @since 0.0.1
 * 
 * @template T The expected type of the array-like value.
 * @param payload An value to be determined.
 * @returns The assertion result.
 * 
 * @example
 * isArray([]);
 * // > true
 * 
 * isArray("Hello, world!");
 * // > true
 * 
 * isArray(new Uint8Array());
 * // > true
 * 
 * isArray({});
 * // > false
 */
export function isArrayLike<T extends IArrayLike = IArrayLike>(payload: unknown): payload is T
{
    return (
        (!isNullLike(payload) && !isAnyFunction(payload)) &&
        isValidLength((payload as IArrayLike).length)
    );
}
