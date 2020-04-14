"use strict";

import { TAG_MAP } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { IMap } from "./interfaces/map";

export function isMap<T extends IMap = IMap>(payload: unknown): payload is T
{
    return (isInstanceOf(payload, Map) || hasToStringTagOf(payload, TAG_MAP));
}
