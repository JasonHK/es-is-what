import isObject from "../Object/isObject";

import isAccessorDescriptor from "./isAccessorDescriptor";
import isDataDescriptor from "./isDataDescriptor";
import type GenericDescriptor from "./GenericDescriptor";

export default function isGenericDescriptor(payload: unknown): payload is GenericDescriptor
{
    if (!isObject(payload)) { return false; }
    return (!isAccessorDescriptor(payload) && !isDataDescriptor(payload));
}
