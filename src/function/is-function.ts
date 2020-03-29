"use strict";

import { TAG_FUNCTION } from "../internal/string-tags";

import { hasStringTagOf } from "../object/has-string-tag-of";

import { isAnyFunction } from "./is-any-function";
import { IFunction } from "./interfaces/function";

export function isFunction<T extends IFunction = IFunction>(payload: unknown): payload is T
{
    return (isAnyFunction(payload) && hasStringTagOf(payload, TAG_FUNCTION));
}
