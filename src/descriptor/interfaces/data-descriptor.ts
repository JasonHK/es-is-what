"use strict";

import { IBaseDescriptor } from "./base-descriptor";

export interface IDataDescriptor extends IBaseDescriptor
{
    value: unknown;
    writable: boolean;
}
