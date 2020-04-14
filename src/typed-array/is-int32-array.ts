"use strict";

import { TAG_INT32_ARRAY } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

export function isInt32Array(payload: unknown): payload is Int32Array
{
    return (isInstanceOf(payload, Int32Array) || hasToStringTagOf(payload, TAG_INT32_ARRAY));
}
