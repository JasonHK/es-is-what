import callBound from "call-bind/callBound";

import hasToStringTag from "./hasToStringTag";

const $toString = callBound("%Object.prototype.toString%");

export default function getToStringTag(payload: unknown): string
{
    if (hasToStringTag(payload))
    {
        return payload[Symbol.toStringTag];
    }

    return $toString(payload).slice(8, -1);
}
