import isNullLike from "../Null/isNullLike";
import isCallable from "../Function/isCallable";

export default function isAsyncIterable(payload: unknown): payload is AsyncIterable<unknown>
{
    return (!isNullLike(payload) && isCallable((payload as AsyncIterable<unknown>)[Symbol.asyncIterator]));
}
