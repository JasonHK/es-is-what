"use strict";

import { isAccessorDescriptor } from "./is-accessor-descriptor";
import { isDataDescriptor } from "./is-data-descriptor";

import { IDescriptor } from "./interfaces/descriptor";

export function isDescriptor(payload: unknown): payload is IDescriptor
{
    return (isDataDescriptor(payload) || isAccessorDescriptor(payload));
}
