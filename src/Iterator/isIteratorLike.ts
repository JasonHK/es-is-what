import isUndefined from "../Undefined/isUndefined";
import isObject from "../Object/isObject";
import isCallable from "../Function/isCallable";

import type IteratorLike from "./IteratorLike";

/**
 * Determine whether the payload is an `IteratorLike` object or not.
 * 
 * @remarks
 * There is no way to determine whether the payload is an `Iterator` or `AsyncIterator` object
 * without actually calling it. So this is the best I cloud achieve.
 * 
 * @param payload An value to be determined.
 * @returns The assertion result.
 */
export default function isIteratorLike<T extends IteratorLike<unknown> = IteratorLike<unknown>>(payload: unknown): payload is T
{
    if (!isObject<T>(payload)) { return false; }

    return (
        isCallable(payload.next) &&
        (isUndefined(payload.return) || isCallable(payload.return)) &&
        (isUndefined(payload.throw) || isCallable(payload.throw)) 
    );
}
