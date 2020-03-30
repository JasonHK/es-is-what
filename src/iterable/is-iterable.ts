"use strict";

import { isAnyFunction } from "../function/is-any-function";
import { isAnyObject } from "../object/is-any-object";

export function isIterable<T = unknown>(payload: unknown): payload is Iterable<T>
{
    return (
        isAnyObject<Iterable<T>>(payload) && isAnyFunction(payload[Symbol.iterator])
    );
}
