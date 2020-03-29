"use strict";

import { isNull } from "../../is-null";

import { TO_STRING_TAG_MATCHER } from "../../internal/constants";

import { hasToStringTag } from "../../internal/utilities/has-to-string-tag";
import { objectToString } from "../../internal/utilities/object-to-string";

export function getToStringTag(object: unknown): string
{
    if (hasToStringTag(object)) { return object[Symbol.toStringTag]; }

    const stringified = objectToString(object);

    const result = stringified.match(TO_STRING_TAG_MATCHER);
    if (isNull(result))
    {
        throw new Error();
    }

    return result[1];
}
