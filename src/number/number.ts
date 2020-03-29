"use strict";

/**
 * Determine whether the payload is a `number` or not.
 * 
 * @remarks
 * All valid numbers (including `Infinity` or `-Infinity`) will be count as a `number`.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @return The assertion result.
 */
export function isNumber(payload: unknown): payload is number
{
    return ((typeof payload === "number") && !Number.isNaN(payload));
}

export default isAnyNumber;
