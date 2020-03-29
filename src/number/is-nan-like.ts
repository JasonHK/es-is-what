"use strict";

import { isAnyNumberLike } from "./is-any-number-like";
import { isNaN } from "./is-nan";

/**
 * Determine whether the payload is a `NaN`-like object or not.
 * 
 * @remarks
 * `NaN`-like means the payload is either a `NaN` or an object wrapped `NaN`.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export function isNaNLike(payload: unknown): boolean
{
    return (
        isNaN(payload) ||
        (isAnyNumberLike(payload) && isNaN(payload.valueOf()))
    );
}
