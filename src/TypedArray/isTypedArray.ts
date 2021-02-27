import type { TypedArray } from "type-fest";

import isString from "../String/isString";

import getToStringTag from "./_helpers/getToStringTag";

export default function isTypedArray(payload: unknown): payload is TypedArray
{
    return isString(getToStringTag(payload));
}
