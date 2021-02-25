import isObject from "../Object/isObject";
import isCallable from "../Function/isCallable";

export default function isIterable<T extends Iterable<unknown> = Iterable<unknown>>(payload: unknown): payload is T
{
    return (isObject<T>(payload) && isCallable(payload[Symbol.iterator]));
}
