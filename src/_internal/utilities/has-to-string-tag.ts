"use strict";

import { isAnyObject } from "../../object/is-any-object";
import { isString } from "../../string/is-string";

import { IHasToStringTag } from "../interfaces/has-to-string-tag";

export function hasToStringTag(object: unknown): object is IHasToStringTag
{
    return (
        isAnyObject<IHasToStringTag>(object) &&
        (Reflect.has(object, Symbol.toStringTag) && isString(object[Symbol.toStringTag]))
    );
}
