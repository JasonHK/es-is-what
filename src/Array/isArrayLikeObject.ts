import isObject from "../Object/isObject";
import type EnsureObject from "../Object/EnsureObject";

import isArrayLike from "./isArrayLike";
import type ArrayLikeObject from "./ArrayLikeObject";

/**
 * Determine whether the payload is an array-like object or not.
 * 
 * @notes
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
 * ```typescript
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
 * ```
 */
export default function isArrayLikeObject<T extends ArrayLikeObject<unknown> = ArrayLike<unknown>>(payload: unknown): payload is EnsureObject<T>
{
    return (isArrayLike(payload) && isObject(payload));
}
