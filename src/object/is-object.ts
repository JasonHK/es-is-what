"use strict";

import { isNull } from "../null/is-null";

import { IObject } from "./interfaces/object";

/**
 * Determine whether the payload is or is not a non-primitive object except for function.
 * 
 * @notes
 * `null` is not considered as a non-primitive object.
 * 
 * @since 0.0.1
 * 
 * @template T The expected type of the object.
 * @param payload An value to be determined.
 * @returns The assertion result.
 */
export function isObject<T extends object = IObject>(payload: unknown): payload is T
{
    return ((typeof payload === "object") && !isNull(payload));
}
