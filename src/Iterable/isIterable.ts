import isNullLike from "../Null/isNullLike";
import isCallable from "../Function/isCallable";

export default function isIterable<T extends Iterable<unknown> = Iterable<unknown>>(payload: unknown): payload is T
{
    return (!isNullLike(payload) && isCallable((payload as T)[Symbol.iterator]));
}
