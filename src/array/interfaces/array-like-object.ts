"use strict";

import { IArrayLike } from "./array-like";

/**
 * Representing an array-like object.
 * 
 * @remarks
 * Array-like means the payload is not a function and has the `length` property which is an integer
 * between `0` and `MAX_SAFE_INTEGER` (inclusive).
 * 
 * @since 0.0.1
 */
export type IArrayLikeObject = object & IArrayLike;
