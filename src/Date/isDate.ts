import callBoundIntrinsic from "call-bind/callBound";

/**
 * The call-bound version of the [`Date.prototype.valueOf`](https://tc39.es/ecma262/#sec-date.prototype.valueof)
 * function. Used to check for the existence of the `[[DateValue]]` internal slot.
 */
const $valueOf = callBoundIntrinsic("%Date.prototype.valueOf%");

/**
 * Determine whether the payload is a `Date` object or not.
 *
 * @since 0.0.1
 *
 * @param payload An value to be determined.
 * @returns The assertion result.
 *
 * @example
 * ```typescript
 * isDate(new Date());
 * // > true
 *
 * isDate(Date());
 * // > false
 * //
 * // NOTE: Calling `Date()` without the `new` operator returns a string.
 *
 * isDate(Date.now());
 * // > false
 * ```
 */
export default function isDate(payload: unknown): payload is Date
{
    // Check for the existence of the `[[DateValue]]` internal slot.
    try { $valueOf(payload); } catch { return false; }

    return true;
}
