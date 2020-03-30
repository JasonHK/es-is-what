"use strict";

const propertyIsEnumerableNative = Object.prototype.propertyIsEnumerable;

export function objectPropertyIsEnumerable(object: object, key: string | number | symbol): boolean
{
    return propertyIsEnumerableNative.call(object, key);
}
