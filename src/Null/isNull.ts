/**
 * Determine whether the payload is `null`.
 * 
 * @since 0.0.1
 * 
 * @param payload A value to determine.
 * @returns The assertion result.
 * 
 * @example
 * ```ts
 * isNull(null);
 * // > true
 * 
 * isNull(undefined);
 * // > false
 * ```
 */
export default function isNull(payload: unknown): payload is null
{
    return (payload === null);
}
