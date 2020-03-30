"use strict";

import { isBigInt64Array } from "./is-big-int64-array";
import { isBigUint64Array } from "./is-big-uint64-array";
import { isFloat32Array } from "./is-float32-array";
import { isFloat64Array } from "./is-float64-array";
import { isInt16Array } from "./is-int16-array";
import { isInt32Array } from "./is-int32-array";
import { isInt8Array } from "./is-int8-array";
import { isUint16Array } from "./is-uint16-array";
import { isUint32Array } from "./is-uint32-array";
import { isUint8Array } from "./is-uint8-array";
import { isUint8ClampedArray } from "./is-uint8-clamped-array";

import { ITypedArray } from "./interfaces/typed-array";

export function isTypedArray(payload: unknown): payload is ITypedArray
{
    return (
        isInt8Array(payload)         ||
        isUint8Array(payload)        ||
        isUint8ClampedArray(payload) ||
        isInt16Array(payload)        ||
        isUint16Array(payload)       ||
        isInt32Array(payload)        ||
        isUint32Array(payload)       ||
        isFloat32Array(payload)      ||
        isFloat64Array(payload)      ||
        isBigInt64Array(payload)     ||
        isBigUint64Array(payload)
    );
}
