"use strict";

import { isUndefined } from "../undefined/is-undefined";

import { isNull } from "./is-null";

/**
 * Determine whether the payload is a null-like value or not.
 * 
 * @remarks
 * Null-like means the payload is either `null` or `undefined`.
 * 
 * @since 0.0.1
 * 
 * @param payload An value to be determined.
 * @returns The assertion result.
 * 
 * @example
 * ```typescript
 * isNullLike(null);
 * // > true
 * 
 * isNullLike(undefined);
 * // > true
 * 
 * isNullLike({});
 * // > false
 * ```
 */
export function isNullLike(payload: unknown): payload is null | undefined
{
    return (isNull(payload) || isUndefined(payload));
}
