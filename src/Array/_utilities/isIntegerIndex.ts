import isSafeInteger from "../../Number/isSafeInteger";

import isLength from "./isLength";

export default function isIntegerIndex(payload: number, length?: number): boolean;

export default function isIntegerIndex(payload: unknown, length?: number): payload is number;

export default function isIntegerIndex(payload: unknown, length: number = Number.MAX_SAFE_INTEGER): boolean
{
    if (!isSafeInteger(payload) || Object.is(payload, -0)) { return false; }

    return ((payload >= 0) && (payload < length));
}
