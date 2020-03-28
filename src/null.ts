"use strict";

/**
 * Determine whether the payload is `null` or not.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @return The assertion result.
 */
export function isNull(payload: unknown): payload is null
{
    return (payload === null);
}
