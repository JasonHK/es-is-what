"use strict";

import { isNull } from "./is-null";
import { isUndefined } from "./is-undefined";

/**
 * Determine whether the payload is a null-like object or not.
 * 
 * @remarks
 * Null-like means the payload is either `null` or `undefined`.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @return The assertion result.
 * 
 * @example
 * isNullLike(null);
 * // > true
 * 
 * isNullLike(undefined);
 * // > true
 * 
 * isNullLike(NaN);
 * // > false
 */
export function isNullLike(payload: unknown): payload is null | undefined
{
    return (isNull(payload) || isUndefined(payload));
}
