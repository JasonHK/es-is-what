"use strict";

import { TAG_UINT16_ARRAY } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

export function isUint16Array(payload: unknown): payload is Uint16Array
{
    return (isInstanceOf(payload, Uint16Array) || hasToStringTagOf(payload, TAG_UINT16_ARRAY));
}
