import { SetOptional } from "type-fest";

import isObject from "../Object/isObject";
import isCallable from "../Function/isCallable";

type T = SetOptional<PromiseLike<unknown>>;

/**
 * Determine whether the payload is a `Promise`-like object.
 *
 * @since 0.0.1
 * 
 * @param payload The value to determine.
 * @returns The assertion result.
 */
export default function isPromiseLike(payload: unknown): payload is PromiseLike<unknown>
{
    return (isObject<T>(payload) && isCallable(payload.then));
}
