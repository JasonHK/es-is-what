import isNumber from "../../Number/isNumber";
import isInteger from "../../Number/isInteger";

import isLength from "../_utilities/isLength";

export default function ensureLength(payload: unknown, name: string = "length"): asserts payload is number
{
    if (!isLength(payload))
    {
        if (!isInteger(payload))
        {
            if (!isNumber(payload))
            {
                throw new TypeError(`${ name } is not a number.`);
            }

            throw new TypeError(`${ name } is not an integer.`);
        }

        throw new RangeError(`${ name } must between 0 and 9,007,199,254,740,991 (inclusive).`);
    }
}
