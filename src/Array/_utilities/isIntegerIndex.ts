import isNumber from "../../Number/isNumber";
import isInteger from "../../Number/isInteger";
import isSafeInteger from "../../Number/isSafeInteger";
import isNegativeZero from "../../Number/isNegativeZero";

import isLength from "./isLength";
import type IntegerIndex from "./IntegerIndex";

/**
 * Determines whether the payload is a number whose value is an integer index.
 * 
 * @category Array
 * @since 0.0.1
 * 
 * @param payload A value to be determined.
 * @param length  The upper limit (exclusive) of the integer index.
 * @returns The assertion result.
 */
export default function isIntegerIndex(payload: unknown, length: number = Number.MAX_SAFE_INTEGER): payload is IntegerIndex
{
    if (!isLength(length))
    {
        if (!isInteger(length))
        {
            if (!isNumber(length))
            {
                throw new TypeError(`${ nameof(length) } is not a number.`);
            }

            throw new TypeError(`${ nameof(length) } is not an integer.`);
        }

        throw new RangeError(`${ nameof(length) } must between 0 and Number.MAX_SAFE_INTEGER (inclusive).`);
    }

    if (!isSafeInteger(payload) || isNegativeZero(payload)) { return false; }

    return ((payload >= 0) && (payload < length));
}
