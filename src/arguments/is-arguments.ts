"use strict";

import { isArrayLikeObject } from "../array/is-array-like-object";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";

import { TAG_ARGUMENTS } from "../internal/string-tags";

import { objectHasOwnProperty } from "../internal/utilities/object-has-own-property";
import { objectPropertyIsEnumerable } from "../internal/utilities/object-property-is-enumerable";

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
