"use strict";

import { isBoolean } from "../boolean/is-boolean";
import { isObject } from "../object/is-object";

import { IBaseDescriptor } from "./interfaces/base-descriptor";

export function isBaseDescriptor<T extends IBaseDescriptor = IBaseDescriptor>(payload: unknown): payload is T
{
    return (
        isObject<T>(payload) &&
        (
            (Reflect.has(payload, "configurable") && isBoolean(payload.configurable)) &&
            (Reflect.has(payload, "enumerable") && isBoolean(payload.enumerable))
        )
    );
}
