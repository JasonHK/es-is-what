import isObject from "../Object/isObject";

import type DataDescriptor from "./DataDescriptor";

export default function isDataDescriptor(payload: unknown): payload is DataDescriptor
{
    if (!isObject(payload)) { return false; }
    return (Reflect.has(payload, "value") || Reflect.has(payload, "writable"));
}
