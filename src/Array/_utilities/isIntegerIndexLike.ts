import isString from "../../String/isString";
import isNumber from "../../Number/isNumber";

import isIntegerIndex from "./isIntegerIndex";
import type IntegerIndex from "./IntegerIndex";
import type IntegerIndexString from "./IntegerIndexString";

export default function isIntegerIndexLike(payload: unknown, length: number = Number.MAX_SAFE_INTEGER): payload is IntegerIndex | IntegerIndexString
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
