"use strict";

import { isNullLike } from "../null/is-null-like";
import { isAnyFunction } from "../function/is-any-function";

import { IObject } from "../object/interfaces/object";

import { isValidLength } from "../number/utilities/is-valid-length";

import { IArrayLike } from "./interfaces/array-like";

export function isArrayLike<T extends IArrayLike = IArrayLike>(payload: unknown): payload is T
{
    return (
        (!isNullLike(payload) && !isAnyFunction(payload)) &&
        isValidLength((payload as IObject).length)
    );
}
