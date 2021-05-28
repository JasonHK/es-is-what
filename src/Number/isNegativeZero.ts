import type NegativeZero from "./NegativeZero";

/**
 * Determine whether the payload is a number whose value is `-0`.
 * 
 * @category Number
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export default function isNegativeZero(payload: unknown): payload is NegativeZero
{
    return ((payload === 0) && ((1 / payload) === Number.NEGATIVE_INFINITY));
}
