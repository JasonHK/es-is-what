import isUndefined from "../Undefined/isUndefined";
import isBoolean from "../Boolean/isBoolean";
import isObject from "../Object/isObject";

export default function isIteratorResult<T extends IteratorResult<unknown> = IteratorResult<unknown>>(payload: unknown): payload is T
{
    if (!isObject<T>(payload)) { return false; }

    return (
        Reflect.has(payload, "value") &&
        (isUndefined(payload.done) || isBoolean(payload.done))
    );
}
