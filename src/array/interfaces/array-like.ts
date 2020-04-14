"use strict";

/**
 * Representing an array-like value.
 * 
 * @remarks
 * Array-like means the payload is not a function and has the `length` property which is an integer
 * between `0` and `MAX_SAFE_INTEGER` (inclusive).
 * 
 * @since 0.0.1
 */
export type IArrayLike = ArrayLike<unknown>;
