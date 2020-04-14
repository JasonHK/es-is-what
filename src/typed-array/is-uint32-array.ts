"use strict";

import { TAG_UINT32_ARRAY } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

export function isUint32Array(payload: unknown): payload is Uint32Array
{
    return (isInstanceOf(payload, Uint32Array) || hasToStringTagOf(payload, TAG_UINT32_ARRAY));
}
