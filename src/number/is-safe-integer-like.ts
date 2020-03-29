"use strict";

import { isAnyNumberLike } from "./is-any-number-like";
import { isSafeInteger } from "./is-safe-integer";

import { INumberLike } from "./interfaces/number-like";

export function isSafeIntegerLike(payload: INumberLike): boolean;
export function isSafeIntegerLike(payload: unknown): payload is INumberLike;
export function isSafeIntegerLike(payload: unknown): boolean
{
    return (
        isSafeInteger(payload) ||
        (isAnyNumberLike(payload) && isSafeInteger(payload.valueOf()))
    );
}
