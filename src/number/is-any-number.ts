"use strict";

/**
 * Determine whether the payload is a number primitive or not.
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
export function isAnyNumber(payload: unknown): payload is number
{
    return (typeof payload === "number");
}
