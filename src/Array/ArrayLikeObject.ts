import type EnsureObject from "../Object/EnsureObject";

/**
 * Representing an array-like object.
 * 
 * @remarks
 * Array-like means the payload is not a function and has the `length` property which is an integer
 * between `0` and `Number.MAX_SAFE_INTEGER` (inclusive).
 * 
 * @since 0.0.1
 * 
 * @template T The type of the elements.
 */
type ArrayLikeObject<T> = EnsureObject<ArrayLike<T>>;

export default ArrayLikeObject;
