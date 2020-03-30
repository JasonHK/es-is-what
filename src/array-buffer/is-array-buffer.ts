"use strict";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { TAG_ARRAY_BUFFER } from "../internal/string-tags";

export function isArrayBuffer(payload: unknown): payload is ArrayBuffer
{
    return (isInstanceOf(payload, ArrayBuffer) || hasToStringTagOf(payload, TAG_ARRAY_BUFFER));
}
