import isUndefined from "../Undefined/isUndefined";

import isNull from "./isNull";

/**
 * Determine whether the payload is a null-like value or not.
 * 
 * @notes
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
export default function isNullLike(payload: unknown): payload is null | undefined
{
    return (isNull(payload) || isUndefined(payload));
}
