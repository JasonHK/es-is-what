import isNullLike from "../Null/isNullLike";
import isCallable from "../Function/isCallable";

export default function isIterable(payload: unknown): payload is Iterable<unknown>
{
    return (!isNullLike(payload) && isCallable((payload as Iterable<unknown>)[Symbol.iterator]));
}
