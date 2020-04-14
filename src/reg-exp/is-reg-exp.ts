"use strict";

import { TAG_REG_EXP } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

export function isRegExp(payload: unknown): payload is RegExp
{
    return (isInstanceOf(payload, RegExp) || hasToStringTagOf(payload, TAG_REG_EXP));
}
