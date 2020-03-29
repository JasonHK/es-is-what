"use strict";

import { isSafeInteger } from "../is-safe-integer";

export function isValidLength(value: number): boolean;
export function isValidLength(value: unknown): value is number;
export function isValidLength(value: unknown): boolean
{
    return (isSafeInteger(value) && (value >= 0));
}
