import isObject from "../Object/isObject";

import type AccessorDescriptor from "./AccessorDescriptor";

export default function isAccessorDescriptor(payload: unknown): payload is AccessorDescriptor
{
    if (!isObject(payload)) { return false; }
    return (Reflect.has(payload, "get") || Reflect.has(payload, "set"));
}
