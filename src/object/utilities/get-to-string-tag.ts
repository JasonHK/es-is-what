"use strict";

import { isNull } from "../../is-null";

import { TO_STRING_TAG_MATCHER } from "../../internal/constants";

import { hasToStringTag } from "../../internal/utilities/has-to-string-tag";
import { objectToString } from "../../internal/utilities/object-to-string";

export function getToStringTag(object: unknown): string
{
    if (hasToStringTag(object)) { return object[Symbol.toStringTag]; }

    const result = objectToString(object).match(TO_STRING_TAG_MATCHER);
    if (!isNull(result))
    {
        return result[1];
    }
    else
    {
        throw new Error();
    }
}
