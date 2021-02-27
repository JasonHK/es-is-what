import isNullLike from "../Null/isNullLike";
import isCallable from "../Function/isCallable";

export default function isAsyncIterable<T extends AsyncIterable<unknown> = AsyncIterable<unknown>>(payload: unknown): payload is T
{
    return (!isNullLike(payload) && isCallable((payload as T)[Symbol.asyncIterator]));
}
