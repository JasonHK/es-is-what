"use strict";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { TAG_INT8_ARRAY } from "../internal/string-tags";

export function isInt8Array(payload: unknown): payload is Int8Array
{
    return (isInstanceOf(payload, Int8Array) || hasToStringTagOf(payload, TAG_INT8_ARRAY));
}
