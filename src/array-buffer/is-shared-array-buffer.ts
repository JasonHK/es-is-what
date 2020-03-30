"use strict";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { TAG_SHARED_ARRAY_BUFFER } from "../internal/string-tags";

export function isSharedArrayBuffer(payload: unknown): payload is SharedArrayBuffer
{
    return (
        isInstanceOf(payload, SharedArrayBuffer) ||
        hasToStringTagOf(payload, TAG_SHARED_ARRAY_BUFFER)
    );
}
