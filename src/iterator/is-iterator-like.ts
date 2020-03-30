"use strict";

import { isAnyFunction } from "../function/is-any-function";
import { isAnyObject } from "../object/is-any-object";

import { IIteratorLike } from "./interfaces/iterator-like";

export function isIteratorLike<T extends IIteratorLike = IIteratorLike>(payload: unknown): payload is T
{
    return (
        isAnyObject<T>(payload) &&
        (Reflect.has(payload, "next") && isAnyFunction(payload.next))
    );
}
