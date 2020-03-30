"use strict";

import { IBaseDescriptor } from "./base-descriptor";

export interface IAccessorDescriptor extends IBaseDescriptor
{
    get?(): unknown;
    set?(value: unknown): void;
}
