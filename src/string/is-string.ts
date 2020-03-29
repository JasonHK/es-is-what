"use strict";

/**
 * Determine whether the payload is a string or not.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @return The assertion result.
 */
export function isString(payload: unknown): payload is string
{
    return (typeof payload === "string");
}
