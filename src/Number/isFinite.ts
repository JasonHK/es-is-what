import GetIntrinsic from "get-intrinsic";

import type Finite from "./Finite";

interface IsFinite
{
    /**
     * Determines whether the payload is a number whose value is a finite number.
     * 
     * @category Number
     * @since 0.0.1
     * 
     * @param payload A value to be determined.
     * @returns The assertion result.
     */
    (payload: unknown): payload is Finite;
}

/**
 * Determines whether the payload is a number whose value is a finite number.
 * 
 * @category Number
 * @since 0.0.1
 */
const isFinite: IsFinite = GetIntrinsic("%Number.isFinite%") as IsFinite;

export default isFinite;
