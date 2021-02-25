import isObject from "../Object/isObject";
import isCallable from "../Function/isCallable";

export default function isAsyncIterable<T extends AsyncIterable<unknown> = AsyncIterable<unknown>>(payload: unknown): payload is T
{
    return (isObject<T>(payload) && isCallable(payload[Symbol.asyncIterator]));
}
