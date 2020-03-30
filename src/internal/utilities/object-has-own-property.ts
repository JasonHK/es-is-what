"use strict";

const hasOwnPropertyNative = Object.prototype.hasOwnProperty;

export function objectHasOwnProperty(object: object, key: string | number | symbol): boolean
{
    return hasOwnPropertyNative.call(object, key);
}
