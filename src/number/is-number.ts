"use strict";

import { isAnyNumber } from "./is-any-number";

/**
 * Determine whether the payload is a number primitive or not.
 * 
 * @remarks
 * All valid numbers (including `Infinity` and `-Infinity`) will be count as a number by this
 * function.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @return The assertion result.
 */
export function isNumber(payload: unknown): payload is number
{
    return (isAnyNumber(payload) && !Number.isNaN(payload));
}
