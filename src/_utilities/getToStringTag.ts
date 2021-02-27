import callBound from "call-bind/callBound";

import isString from "../String/isString";
import isObject from "../Object/isObject";

interface WithToStringTag
{
    readonly [Symbol.toStringTag]: string;
}

const $toString = callBound("%Object.prototype.toString%");

function hasToStringTag(payload: unknown): payload is WithToStringTag
{
    return (isObject<WithToStringTag>(payload) && isString(payload[Symbol.toStringTag]));
}

export default function getToStringTag(payload: unknown): string
{
    if (hasToStringTag(payload))
    {
        return payload[Symbol.toStringTag];
    }

    return $toString(payload).slice(8, -1);
}
