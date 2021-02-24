interface IsArray
{
    /**
     * Determine whether the payload is an `Array` object or not.
     * 
     * @since 0.0.1
     * 
     * @template T The expected type of the `Array`.
     * @param payload An value to be determined.
     * @returns The assertion result.
     * 
     * @example
     * ```typescript
     * isArray([]);
     * // > true
     * 
     * isArray("Hello, world!");
     * // > false
     * 
     * isArray(new Uint8Array());
     * // > false
     * 
     * isArray({});
     * // > false
     * ```
     */
    <T extends unknown[] = unknown[]>(payload: unknown): payload is T;
}

/**
 * Determine whether the payload is an `Array` object or not.
 * 
 * @since 0.0.1
 */
const isArray: IsArray = Array.isArray as IsArray;

export default isArray;
