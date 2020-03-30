"use strict";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { TAG_FLOAT32_ARRAY } from "../internal/string-tags";

export function isFloat32Array(payload: unknown): payload is Float32Array
{
    return (isInstanceOf(payload, Float32Array) || hasToStringTagOf(payload, TAG_FLOAT32_ARRAY));
}
