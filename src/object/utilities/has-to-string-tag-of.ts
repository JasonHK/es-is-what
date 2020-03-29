"use strict";

import { getToStringTag } from "./get-to-string-tag";

export function hasToStringTagOf(object: unknown, tag: string): boolean;
export function hasToStringTagOf<T extends object>(object: unknown, tag: string): object is T;
export function hasToStringTagOf(object: unknown, tag: string): boolean
{
    return (getToStringTag(object) === tag);
}
