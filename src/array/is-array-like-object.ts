"use strict";

import { isObject } from "../object/is-object";

import { isArrayLike } from "./is-array-like";
import { IArrayLike } from "./interfaces/array-like";

export function isArrayLikeObject<T extends IArrayLike = IArrayLike>(payload: unknown): payload is T
{
    return (isObject(payload) && isArrayLike(payload));
}
