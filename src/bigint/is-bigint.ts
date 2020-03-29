"use strict";

/**
 * Determine whether the payload is a bigint or not.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @return The assertion result.
 */
export function isBigInt(payload: unknown): payload is bigint
{
    return (typeof payload === "bigint");
}
