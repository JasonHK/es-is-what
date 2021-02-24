/**
 * Determine whether the payload is `null` or not.
 * 
 * @since 0.0.1
 * 
 * @param payload An value to be determined.
 * @returns The assertion result.
 * 
 * @example
 * ```typescript
 * isNull(null);
 * // > true
 * 
 * isNull(undefined);
 * // > false
 * 
 * isNull({});
 * // > false
 * ```
 */
export default function isNull(payload: unknown): payload is null
{
    return (payload === null);
}
