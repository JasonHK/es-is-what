"use strict";

const toStringNative = Object.prototype.toString;

export function toString(object: unknown): string
{
    return toStringNative.call(object);
}
