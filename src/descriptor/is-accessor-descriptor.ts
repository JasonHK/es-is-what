"use strict";

import { isAnyFunction } from "../function/is-any-function";
import { isUndefined } from "../undefined/is-undefined";

import { isBaseDescriptor } from "./is-base-descriptor";

import { IAccessorDescriptor } from "./interfaces/accessor-descriptor";

export function isAccessorDescriptor(payload: unknown): payload is IAccessorDescriptor
{
    return (
        isBaseDescriptor<IAccessorDescriptor>(payload) &&
        (
            (
                Reflect.has(payload, "get") &&
                (isAnyFunction(payload.get) || isUndefined(payload.get))
            ) && (
                Reflect.has(payload, "set") &&
                (isAnyFunction(payload.set) || isUndefined(payload.set))
            )
        )
    );
}
