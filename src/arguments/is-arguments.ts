"use strict";

import { TAG_ARGUMENTS } from "../_internal/string-tags";
import { objectHasOwnProperty } from "../_internal/utilities/object-has-own-property";
import { objectPropertyIsEnumerable } from "../_internal/utilities/object-property-is-enumerable";

import { isArrayLikeObject } from "../array/is-array-like-object";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";

import type { IArguments } from "./interfaces/arguments";

export function isArguments(payload: unknown): payload is IArguments
{
    return (
        isArrayLikeObject(payload) &&
        objectHasOwnProperty(payload, "callee") &&
        (
            !objectPropertyIsEnumerable(payload, "callee") ||
            hasToStringTagOf(payload, TAG_ARGUMENTS)
        )
    );
}
