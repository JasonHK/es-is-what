"use strict";

import { TAG_NUMBER } from "../internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";

import { isAnyNumber } from "./is-any-number";

import { INumberLike } from "./interfaces/number-like";

/**
 * Determine whether the payload is a number-like object or not.
 * 
 * @remarks
 * Number-like means the payload is either a number primitive or an object wrapped number primitive.
 * 
 * @remarks
 * All numbers (including `NaN`, `Infinity` and `-Infinity`) will be count as a number by this
 * function.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export function isAnyNumberLike(payload: unknown): payload is INumberLike
{
    return (
        isAnyNumber(payload) ||
        (
            hasToStringTagOf<Number>(payload, TAG_NUMBER) &&
            isAnyNumber(payload.valueOf())
        )
    );
}
