import callBound from "call-bind/callBound";

import isArrayLikeObject from "../Array/isArrayLikeObject";

import type ArgumentsLike from "./ArgumentsLike";

const $hasOwnProperty = callBound("%Object.prototype.hasOwnProperty%");
const $propertyIsEnumerable = callBound("%Object.prototype.propertyIsEnumerable%");

export default function isArgumentsLike(payload: unknown): payload is ArgumentsLike
{
    if (!isArrayLikeObject<ArgumentsLike>(payload)) { return false; }
    return ($hasOwnProperty(payload, "callee") && !$propertyIsEnumerable(payload, "callee"));
}
