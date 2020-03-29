"use strict";

import { TAG_ASYNC_GENERATOR_FUNCTION } from "../internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";

import { isAnyFunction } from "./is-any-function";
import { IAsyncGeneratorFunction } from "./interfaces/async-generator-function";

export function isAsyncGeneratorFunction<T extends IAsyncGeneratorFunction = IAsyncGeneratorFunction>(payload: unknown): payload is T
{
    return (isAnyFunction(payload) && hasToStringTagOf(payload, TAG_ASYNC_GENERATOR_FUNCTION));
}
