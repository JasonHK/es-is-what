"use strict";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { IWeakSet } from "./interfaces/weak-set";

import { TAG_WEAK_SET } from "../internal/string-tags";

export function isWeakSet<T extends IWeakSet = IWeakSet>(payload: unknown): payload is T
{
    return (isInstanceOf(payload, WeakSet) || hasToStringTagOf(payload, TAG_WEAK_SET));
}
