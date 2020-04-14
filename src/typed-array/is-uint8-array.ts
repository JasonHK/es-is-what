"use strict";

import { TAG_UINT8_ARRAY } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

export function isUint8Array(payload: unknown): payload is Uint8Array
{
    return (isInstanceOf(payload, Uint8Array) || hasToStringTagOf(payload, TAG_UINT8_ARRAY));
}
