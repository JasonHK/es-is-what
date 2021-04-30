/**
 * Determine whether the payload is `undefined`.
 * 
 * @since 0.0.1
 * 
 * @param payload The value to determine.
 * @returns The assertion result.
 * 
 * @example
 * ```ts
 * isUndefined(undefined);
 * // > true
 * 
 * isUndefined(null);
 * // > false
 * ```
 */
export default function isUndefined(payload: unknown): payload is undefined
{
    // Never ever use `typeof payload === "undefined"` since `typeof document.all` is `"undefined"`.
    return (payload === undefined);
}
