"use strict";

import { IAnyFunction } from "./interfaces/any-function";

/**
 * Determine whether the payload is a function or not.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @return The assertion result.
 */
export function isAnyFunction<T extends IAnyFunction = IAnyFunction>(payload: unknown): payload is T
{
    return (typeof payload === "function");
}
