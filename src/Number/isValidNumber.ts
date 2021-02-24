import isNumber from "./isNumber";
import isNaN from "./isNaN";

/**
 * Determine whether the payload is a number primitive or not.
 * 
 * @remarks
 * All valid numbers (including `Infinity` and `-Infinity`) will be count as a number by this
 * function.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export default function isValidNumber(payload: number): boolean;
export default function isValidNumber(payload: unknown): payload is number;
export default function isValidNumber(payload: unknown): boolean
{
    return (isNumber(payload) && !isNaN(payload));
}
