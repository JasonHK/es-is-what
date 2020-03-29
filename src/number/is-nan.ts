"use strict";

export function isNaN(payload: unknown): boolean
{
    return ((typeof payload === "number") && Number.isNaN(payload));
}
