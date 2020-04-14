"use strict";

import { TAG_SHARED_ARRAY_BUFFER } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

export function isSharedArrayBuffer(payload: unknown): payload is SharedArrayBuffer
{
    return (
        isInstanceOf(payload, SharedArrayBuffer) ||
        hasToStringTagOf(payload, TAG_SHARED_ARRAY_BUFFER)
    );
}
