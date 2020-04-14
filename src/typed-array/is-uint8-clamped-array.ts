"use strict";

import { TAG_UINT8_CLAMPED_ARRAY } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

export function isUint8ClampedArray(payload: unknown): payload is Uint8ClampedArray
{
    return (isInstanceOf(payload, Uint8ClampedArray) || hasToStringTagOf(payload, TAG_UINT8_CLAMPED_ARRAY));
}
