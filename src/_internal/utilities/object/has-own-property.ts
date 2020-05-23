"use strict";

const hasOwnPropertyNative = Object.prototype.hasOwnProperty;

export function hasOwnProperty(object: object, key: string | number | symbol): boolean
{
    return hasOwnPropertyNative.call(object, key);
}
