"use strict";

import { TAG_ARRAY_BUFFER } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

export function isArrayBuffer(payload: unknown): payload is ArrayBuffer
{
    return (isInstanceOf(payload, ArrayBuffer) || hasToStringTagOf(payload, TAG_ARRAY_BUFFER));
}
