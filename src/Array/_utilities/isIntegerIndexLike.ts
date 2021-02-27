import isString from "../../String/isString";
import isNumber from "../../Number/isNumber";

import isIntegerIndex from "./isIntegerIndex";

export default function isIntegerIndexLike(payload: number | string, length?: number): boolean;

export default function isIntegerIndexLike(payload: unknown, length?: number): payload is number | string;

export default function isIntegerIndexLike(payload: unknown, length: number = Number.MAX_SAFE_INTEGER): boolean
{
    if (isNumber(payload))
    {
        return isIntegerIndex(payload, length);
    }
    else if (isString(payload))
    {
        const number = Number(payload);
        if (String(number) !== payload) { return false; }

        return isIntegerIndex(number, length);
    }

    return false;
}
