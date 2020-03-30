"use strict";

import { isAnyFunction } from "../function/is-any-function";
import { isAnyObject } from "../object/is-any-object";

import { IIterable } from "./interfaces/iterable";

export function isIterable<T extends IIterable = IIterable>(payload: unknown): payload is IIterable
{
    return (
        isAnyObject<T>(payload) &&
        (Reflect.has(payload, Symbol.iterator) && isAnyFunction(payload[Symbol.iterator]))
    );
}
