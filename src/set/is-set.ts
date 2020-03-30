"use strict";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { ISet } from "./interfaces/set";

import { TAG_SET } from "../internal/string-tags";

export function isSet<T extends ISet = ISet>(payload: unknown): payload is T
{
    return (isInstanceOf(payload, Set) || hasToStringTagOf(payload, TAG_SET));
}
