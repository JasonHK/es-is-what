import isSafeInteger from "../../Number/isSafeInteger";
import type SafeInteger from "../../Number/SafeInteger";

/**
 * Determine whether the payload is a valid length value or not.
 * 
 * @notes
 * A valid length value is an integer between `0` and `Number.MAX_SAFE_INTEGER` (inclusive).
 * 
 * @since 0.0.1
 * 
 * @param value An value to be determined.
 * @returns The assertion result.
 * 
 * @example
 * ```typescript
 * isValidLength(0);
 * // > true
 * 
 * isValidLength(Number.MAX_SAFE_INTEGER);
 * // > true
 * 
 * isValidLength(-1);
 * // > false
 * 
 * isValidLength(Number.MAX_SAFE_INTEGER + 1);
 * // > false
 * ```
 */
export default function isLength(value: unknown): value is SafeInteger
{
    return (isSafeInteger(value) && (value >= 0));
}
