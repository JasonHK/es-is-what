/**
 * Represents an object which implements either the `Iterator` or `AsyncIterator` interface.
 */
type IteratorLike<T, TReturn = unknown, TNext = undefined> = Iterator<T, TReturn, TNext> | AsyncIterator<T, TReturn, TNext>;

export default IteratorLike;
