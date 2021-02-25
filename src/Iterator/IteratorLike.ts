type IteratorLike<T, TReturn = any, TNext = undefined> = Iterator<T, TReturn, TNext> | AsyncIterator<T, TReturn, TNext>;

export default IteratorLike;
