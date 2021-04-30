import isUndefined from "../Undefined/isUndefined";

import isNull from "./isNull";

/**
 * Determine whether the payload is a null-like value. Null-like means the payload is either `null`
 * or `undefined`.
 * 
 * @since 0.0.1
 * 
 * @param payload A value to determine.
 * @returns The assertion result.
 * 
 * @example
 * ```ts
 * isNullLike(null);
 * // > true
 * 
 * isNullLike(undefined);
 * // > true
 * ```
 */
export default function isNullLike(payload: unknown): payload is null | undefined
{
    return (isNull(payload) || isUndefined(payload));
}
