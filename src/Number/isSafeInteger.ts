import GetIntrinsic from "get-intrinsic";

import type SafeInteger from "./SafeInteger";

interface IsSafeInteger
{
    /**
     * Determines whether the payload is a number whose value is a safe integer.
     * 
     * @category Number
     * @since 0.0.1
     * 
     * @param payload A value to be determined.
     * @returns The assertion result.
     */
    (payload: unknown): payload is SafeInteger;
}

/**
 * Determines whether the payload is a number whose value is a safe integer.
 * 
 * @category Number
 * @since 0.0.1
 */
const isSafeInteger: IsSafeInteger = GetIntrinsic("%Number.isSafeInteger%") as IsSafeInteger;

export default isSafeInteger;
