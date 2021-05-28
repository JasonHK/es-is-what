import GetIntrinsic from "get-intrinsic";

interface IsArray
{
    /**
     * Determine whether the payload is an `Array` object or not.
     * 
     * @since 0.0.1
     * 
     * @param payload An value to be determined.
     * @returns The assertion result.
     * 
     * @example
     * ```ts
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
    (payload: unknown): payload is unknown[];
}

/**
 * Determine whether the payload is an `Array` object or not.
 * 
 * @since 0.0.1
 */
const isArray: IsArray = GetIntrinsic("%Array.isArray%");

export default isArray;
