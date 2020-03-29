"use strict";

const toStringNative = Object.prototype.toString;

export function objectToString(object: unknown): string
{
    return toStringNative.call(object);
}
