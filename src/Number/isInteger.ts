import GetIntrinsic from "get-intrinsic";

import type Integer from "./Integer";

interface IsInteger
{
    /**
     * Determines whether the payload is a number whose value is an integer.
     * 
     * @category Number
     * @since 0.0.1
     * 
     * @param payload A value to be determined.
     * @returns The assertion result.
     */
    (payload: unknown): payload is Integer;
}

/**
 * Determines whether the payload is a number whose value is an integer.
 * 
 * @category Number
 * @since 0.0.1
 */
const isInteger: IsInteger = GetIntrinsic("%Number.isInteger%") as IsInteger;

export default isInteger;
