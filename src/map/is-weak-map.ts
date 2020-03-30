"use strict";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { IWeakMap } from "./interfaces/weak-map";

import { TAG_WEAK_MAP } from "../internal/string-tags";

export function isWeakMap<T extends IWeakMap = IWeakMap>(payload: unknown): payload is T
{
    return (isInstanceOf(payload, WeakMap) || hasToStringTagOf(payload, TAG_WEAK_MAP));
}
