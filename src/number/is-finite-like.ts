"use strict";

import { isAnyNumberLike } from "./is-any-number-like";
import { isFinite } from "./is-finite";

import { INumberLike } from "./interfaces/number-like";

export function isFiniteLike(payload: INumberLike): payload is INumberLike;
export function isFiniteLike(payload: unknown): boolean;
export function isFiniteLike(payload: unknown): boolean
{
    return (
        isFinite(payload) ||
        (isAnyNumberLike(payload) && isFinite(payload.valueOf()))
    );
}
