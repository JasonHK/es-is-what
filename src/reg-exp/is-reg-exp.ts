"use strict";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { TAG_REG_EXP } from "../internal/string-tags";

export function isRegExp(payload: unknown): payload is RegExp
{
    return (isInstanceOf(payload, RegExp) || hasToStringTagOf(payload, TAG_REG_EXP));
}
