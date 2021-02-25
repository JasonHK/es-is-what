import isString from "../../String/isString";

import isObject from "../isObject";

export interface WithToStringTag
{
    readonly [Symbol.toStringTag]: string;
}

export default function hasToStringTag(payload: unknown): payload is WithToStringTag
{
    return (isObject<WithToStringTag>(payload) && isString(payload[Symbol.toStringTag]));
}
