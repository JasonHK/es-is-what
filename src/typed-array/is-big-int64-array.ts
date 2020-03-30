"use strict";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { TAG_BIG_INT64_ARRAY } from "../internal/string-tags";

export function isBigInt64Array(payload: unknown): payload is BigInt64Array
{
    return (isInstanceOf(payload, BigInt64Array) || hasToStringTagOf(payload, TAG_BIG_INT64_ARRAY));
}
