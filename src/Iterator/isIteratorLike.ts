import type { SetOptional } from "type-fest";

import isUndefined from "../Undefined/isUndefined";
import isObject from "../Object/isObject";
import isCallable from "../Function/isCallable";

import type IteratorLike from "./IteratorLike";

type MaybeIteratorLike = SetOptional<IteratorLike<unknown>>;

/**
 * Determine whether the payload is an iterator-like object.
 * 
 * @remarks
 * There is no way to determine whether the payload is an `Iterator` or `AsyncIterator` object
 * without actually calling it. So this is the best a side-effect-free type checker could do.
 * 
 * @param payload An value to be determined.
 * @returns The assertion result.
 */
export default function isIteratorLike(payload: unknown): payload is IteratorLike<unknown>
{
    if (!isObject<MaybeIteratorLike>(payload)) { return false; }

    return (
        isCallable(payload.next) &&
        (isUndefined(payload.return) || isCallable(payload.return)) &&
        (isUndefined(payload.throw) || isCallable(payload.throw)) 
    );
}
