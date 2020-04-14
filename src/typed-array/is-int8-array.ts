"use strict";

import { TAG_INT8_ARRAY } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

export function isInt8Array(payload: unknown): payload is Int8Array
{
    return (isInstanceOf(payload, Int8Array) || hasToStringTagOf(payload, TAG_INT8_ARRAY));
}
