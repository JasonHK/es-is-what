import isUndefined from "../Undefined/isUndefined";
import isString from "../String/isString";
import isObject from "../Object/isObject";

import type ErrorLike from "./ErrorLike";

export default function isErrorLike(payload: unknown): payload is ErrorLike
{
    if (!isObject<ErrorLike>(payload)) { return false; }

    return (
        isString(payload.name) &&
        isString(payload.message) &&
        (isUndefined(payload.stack) || isString(payload.stack))
    );
}
