"use strict";

import { TAG_STRING } from "../internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";

import { isString } from "./is-string";

/**
 * Determine whether the payload is a string-like object or not.
 * 
 * @remarks
 * String-like means the payload is either a string primitive or an object wrapped string primitive.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export function isStringLike(payload: unknown): payload is string | String
{
    return (
        isString(payload) ||
        (
            hasToStringTagOf<String>(payload, TAG_STRING) &&
            isString(payload.valueOf())
        )
    );
}

export default isStringLike;
