"use strict";

export interface IHasToStringTag
{
    readonly [Symbol.toStringTag]: string;
}
