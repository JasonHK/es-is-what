"use strict";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

import { IPromise } from "./interfaces/promise";

import { TAG_PROMISE } from "../internal/string-tags";

export function isPromise<T extends IPromise = IPromise>(payload: unknown): payload is T
{
    return (isInstanceOf(payload, Promise) || hasToStringTagOf<T>(payload, TAG_PROMISE));
}
