"use strict";

import { isAnyFunction } from "../function/is-any-function";
import { isAnyObject } from "../object/is-any-object";

import { IAsyncIterable } from "./interfaces/async-iterable";

export function isAsyncIterable<T extends IAsyncIterable = IAsyncIterable>(payload: unknown): payload is IAsyncIterable
{
    return (
        isAnyObject<T>(payload) &&
        (Reflect.has(payload, Symbol.asyncIterator) && isAnyFunction(payload[Symbol.asyncIterator]))
    );
}
