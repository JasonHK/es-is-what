/**
 * Determine whether the payload is a number primitive or not.
 * 
 * @remarks
 * All numbers (including `NaN`, `Infinity` and `-Infinity`) will be count as a number by this
 * function.
 * 
 * @category Number
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export default function isNumber(payload: unknown): payload is number
{
    return (typeof payload === "number");
}
