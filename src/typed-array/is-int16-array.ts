"use strict";

import { TAG_INT16_ARRAY } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

export function isInt16Array(payload: unknown): payload is Int16Array
{
    return (isInstanceOf(payload, Int16Array) || hasToStringTagOf(payload, TAG_INT16_ARRAY));
}
