"use strict";

import { TAG_BIG_UINT64_ARRAY } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

export function isBigUint64Array(payload: unknown): payload is BigUint64Array
{
    return (isInstanceOf(payload, BigUint64Array) || hasToStringTagOf(payload, TAG_BIG_UINT64_ARRAY));
}
