"use strict";

import { isBoolean } from "../boolean/is-boolean";

import { isBaseDescriptor } from "./is-base-descriptor";

import { IDataDescriptor } from "./interfaces/data-descriptor";

export function isDataDescriptor(payload: unknown): payload is IDataDescriptor
{
    return (
        isBaseDescriptor<IDataDescriptor>(payload) &&
        (
            Reflect.has(payload, "value") &&
            (Reflect.has(payload, "writable") && isBoolean(payload.writable))
        )
    );
}
