"use strict";

import { isArrayBuffer } from "./is-array-buffer";
import { isSharedArrayBuffer } from "./is-shared-array-buffer";

export function isAnyArrayBuffer(payload: unknown): payload is (ArrayBuffer | SharedArrayBuffer)
{
    return (isArrayBuffer(payload) || isSharedArrayBuffer(payload));
}
