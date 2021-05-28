import callBound from "call-bind/callBound";

import isArrayLikeObject from "../Array/isArrayLikeObject";

const $hasOwnProperty = callBound("%Object.prototype.hasOwnProperty%");
const $propertyIsEnumerable = callBound("%Object.prototype.propertyIsEnumerable%");

export default function isArgumentsLike(payload: unknown): payload is IArguments
{
    if (!isArrayLikeObject(payload)) { return false; }
    return ($hasOwnProperty(payload, "callee") && !$propertyIsEnumerable(payload, "callee"));
}
