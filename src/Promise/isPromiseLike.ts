import isObject from "../Object/isObject";
import isCallable from "../Function/isCallable";

export default function isPromiseLike<T extends PromiseLike<unknown> = PromiseLike<unknown>>(payload: unknown): payload is T
{
    return (isObject<T>(payload) && isCallable(payload.then));
}
