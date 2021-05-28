import isUndefined from "../Undefined/isUndefined";
import isString from "../String/isString";
import isObject from "../Object/isObject";

export default function isErrorLike(payload: unknown): payload is Error
{
    if (!isObject<Error>(payload)) { return false; }

    return (
        isString(payload.name) &&
        isString(payload.message) &&
        (isUndefined(payload.stack) || isString(payload.stack))
    );
}
