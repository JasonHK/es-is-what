"use strict";

import { TAG_ASYNC_FUNCTION } from "../internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";

import { isAnyFunction } from "./is-any-function";
import { IAsyncFunction } from "./interfaces/async-function";

export function isFunction<T extends IAsyncFunction = IAsyncFunction>(payload: unknown): payload is T
{
    return (isAnyFunction(payload) && hasToStringTagOf(payload, TAG_ASYNC_FUNCTION));
}
