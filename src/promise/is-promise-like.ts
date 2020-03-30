"use strict";

import { isAnyFunction } from "../function/is-any-function";
import { isAnyObject } from "../object/is-any-object";

import { IPromiseLike } from "./interfaces/promise-like";

export function isPromiseLike<T extends IPromiseLike = IPromiseLike>(payload: unknown): payload is T
{
    return (
        isAnyObject<T>(payload) &&
        (Reflect.has(payload, "then") && isAnyFunction(payload.then))
    );
}
