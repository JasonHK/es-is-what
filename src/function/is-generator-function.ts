"use strict";

import { TAG_GENERATOR_FUNCTION } from "../internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";

import { isAnyFunction } from "./is-any-function";
import { IGeneratorFunction } from "./interfaces/generator-function";

export function isGeneratorFunction<T extends IGeneratorFunction = IGeneratorFunction>(payload: unknown): payload is T
{
    return (isAnyFunction(payload) && hasToStringTagOf(payload, TAG_GENERATOR_FUNCTION));
}
