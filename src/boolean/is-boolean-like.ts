"use strict";

import { TAG_BOOLEAN } from "../internal/string-tags";

import { hasStringTagOf } from "../object/has-string-tag-of";

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
        (hasStringTagOf<Boolean>(payload, TAG_BOOLEAN) && isBoolean(payload.valueOf()))
    );
}
