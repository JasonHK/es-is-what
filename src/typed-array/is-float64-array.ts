"use strict";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { TAG_FLOAT64_ARRAY } from "../internal/string-tags";

export function isFloat64Array(payload: unknown): payload is Float64Array
{
    return (isInstanceOf(payload, Float64Array) || hasToStringTagOf(payload, TAG_FLOAT64_ARRAY));
}
