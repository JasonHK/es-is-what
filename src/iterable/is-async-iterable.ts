"use strict";

import { isAnyFunction } from "../function/is-any-function";
import { isAnyObject } from "../object/is-any-object";

export function isAsyncIterable<T = unknown>(payload: unknown): payload is AsyncIterable<T>
{
    return (
        isAnyObject<AsyncIterable<T>>(payload) && isAnyFunction(payload[Symbol.asyncIterator])
    );
}
