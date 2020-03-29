"use strict";

import { isAnyNumber } from "./is-any-number";

/**
 * Determine whether the payload is a `NaN` or not.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export function isNaN(payload: unknown): boolean
{
    return (isAnyNumber(payload) && Number.isNaN(payload));
}
