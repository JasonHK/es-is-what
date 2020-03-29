"use strict";

import { isAnyNumberLike } from "./is-any-number-like";
import { isInteger } from "./is-integer";

import { INumberLike } from "./interfaces/number-like";

export function isIntegerLike(payload: INumberLike): payload is INumberLike;
export function isIntegerLike(payload: unknown): boolean;
export function isIntegerLike(payload: unknown): boolean
{
    return (
        isInteger(payload) ||
        (isAnyNumberLike(payload) && isInteger(payload.valueOf()))
    );
}
