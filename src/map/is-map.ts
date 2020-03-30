"use strict";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { IMap } from "./interfaces/map";

import { TAG_MAP } from "../internal/string-tags";

export function isMap<T extends IMap = IMap>(payload: unknown): payload is T
{
    return (isInstanceOf(payload, Map) || hasToStringTagOf(payload, TAG_MAP));
}
