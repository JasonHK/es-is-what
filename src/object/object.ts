"use strict";

import { isNull } from "../is-null";

/**
 * Determine whether the payload is or is not a non-primitive object except for function.
 * 
 * @remarks
 * `null` is not considered as a non-primitive object.
 * 
 * @since 0.0.1
 * 
 * @template T The expected type of the object.
 * @param payload An object to be determined.
 * @return The assertion result.
 */
export function isObject<T extends object = object>(payload: unknown): payload is T
{
    return ((typeof payload === "object") && !isNull(payload));
}
