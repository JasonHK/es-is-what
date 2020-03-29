"use strict";

import { TAG_BOOLEAN } from "../internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";

import { isBoolean } from "./is-boolean";

/**
 * Determine whether the payload is a boolean-like object or not.
 * 
 * @remarks
 * Boolean-like means the payload is either a boolean or an object wrapped boolean primitive.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export function isBooleanLike(payload: unknown): payload is boolean | Boolean
{
    return (
        isBoolean(payload) ||
        (hasToStringTagOf<Boolean>(payload, TAG_BOOLEAN) && isBoolean(payload.valueOf()))
    );
}
