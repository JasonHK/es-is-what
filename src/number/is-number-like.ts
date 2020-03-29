"use strict";

import { TAG_NUMBER } from "../internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";

import { isAnyNumberLike } from "./is-any-number-like";
import { isNumber } from "./is-number";

/**
 * Determine whether the payload is a number-like object or not.
 * 
 * @remarks
 * Number-like means the payload is either a number primitive or an object wrapped number primitive.
 * 
 * @remarks
 * All valid numbers (including `Infinity` and `-Infinity`) will be count as a number by this
 * function.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export function isNumberLike(payload: unknown): payload is (number | Number)
{
    return (
        isNumber(payload) ||
        (isAnyNumberLike(payload) && isNumber(payload.valueOf()))
    );
}
