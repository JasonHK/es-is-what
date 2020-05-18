"use strict";

import { IArrayLike } from "./array-like";

/**
 * Representing an array-like object.
 * 
 * @notes
 * Array-like means the payload is not a function and has the `length` property which is an integer
 * between `0` and `Number.MAX_SAFE_INTEGER` (inclusive).
 * 
 * @since 0.0.1
 */
export type IArrayLikeObject = object & IArrayLike;
