"use strict";

import { isAnyNumber } from "./is-any-number";

export function isSafeInteger(payload: number): boolean;
export function isSafeInteger(payload: unknown): payload is number;
export function isSafeInteger(payload: unknown): boolean
{
    return (isAnyNumber(payload) && Number.isSafeInteger(payload));
}
