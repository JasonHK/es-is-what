"use strict";

import { isAnyNumber } from "./is-any-number";

export function isFinite(payload: number): boolean;
export function isFinite(payload: unknown): payload is number;
export function isFinite(payload: unknown): boolean
{
    return (isAnyNumber(payload) && Number.isFinite(payload));
}
