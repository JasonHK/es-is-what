"use strict";

import { isObject } from "../object/is-object";

/**
 * Determine whether the payload is an `Array` object or not.
 * 
 * @since 0.0.1
 * 
 * @template T The expected type of the `Array`.
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export function isArray<T extends unknown[] = unknown[]>(payload: unknown): payload is T
{
    return isObject(payload) && Array.isArray(payload);
}

export default isArray;
