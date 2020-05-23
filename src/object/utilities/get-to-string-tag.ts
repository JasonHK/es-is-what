"use strict";

import { TO_STRING_TAG_MATCHER } from "../../_internal/constants";
import { hasToStringTag } from "../../_internal/utilities/has-to-string-tag";
import { toString } from "../../_internal/utilities/object/to-string";

import { isNull } from "../../null/is-null";

export function getToStringTag(object: unknown): string
{
    if (hasToStringTag(object)) { return object[Symbol.toStringTag]; }

    const stringified = toString(object);

    const result = stringified.match(TO_STRING_TAG_MATCHER);
    if (isNull(result))
    {
        throw new Error();
    }

    return result[1];
}
