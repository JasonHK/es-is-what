"use strict";

/**
 * Determine whether the payload is a `boolean` or not.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @return The assertion result.
 * 
 * @example
 * isBoolean(false);
 * // > true
 * 
 * isBoolean(Object(false));
 * // > false
 * 
 * isBoolean(null);
 * // > false
 */
export function isBoolean(payload: unknown): payload is boolean
{
    return (typeof payload === "boolean");
}
