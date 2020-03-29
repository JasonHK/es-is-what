"use strict";

import { TAG_FUNCTION } from "../internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";

import { isAnyFunction } from "./is-any-function";
import { IFunction } from "./interfaces/function";

export function isFunction<T extends IFunction = IFunction>(payload: unknown): payload is T
{
    return (isAnyFunction(payload) && hasToStringTagOf(payload, TAG_FUNCTION));
}
