import GetIntrinsic from "get-intrinsic";

import type NaN from "./NaN";

interface IsNaN
{
    /**
     * Determine whether the payload is a number whose value is `NaN`.
     * 
     * @category Number
     * @since 0.0.1
     * 
     * @param payload An object to be determined.
     * @returns The assertion result.
     */
    (payload: unknown): payload is NaN;
}

/**
 * Determine whether the payload is a number whose value is `NaN`.
 * 
 * @category Number
 * @since 0.0.1
 */
const isNaN: IsNaN = GetIntrinsic("%Number.isNaN%") as IsNaN;

export default isNaN;
