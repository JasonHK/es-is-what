import type { SetOptional } from "type-fest";

import isNullLike from "../Null/isNullLike";
import isFunctionType from "../Function/isFunctionType";

import isLength from "./_utilities/isLength";

type MaybeArrayLike = SetOptional<ArrayLike<unknown>>;

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
 * ```typescript
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
 * ```
 */
export default function isArrayLike(payload: unknown): payload is ArrayLike<unknown>
{
    if (isNullLike(payload) || isFunctionType(payload)) { return false; }
    return isLength((payload as MaybeArrayLike).length);
}
