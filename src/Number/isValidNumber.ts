import isNumber from "./isNumber";
import isNaN from "./isNaN";
import type ValidNumber from "./ValidNumber";

/**
 * Determine whether the payload is a number whose value is not `NaN`.
 * 
 * @category Number
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export default function isValidNumber(payload: unknown): payload is ValidNumber
{
    return (isNumber(payload) && !isNaN(payload));
}
