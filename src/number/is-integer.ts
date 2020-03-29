"use strict";

import { isAnyNumber } from "./is-any-number";

export function isInteger(payload: number): boolean;
export function isInteger(payload: unknown): payload is number;
export function isInteger(payload: unknown): boolean
{
    return (isAnyNumber(payload) && Number.isInteger(payload));
}
