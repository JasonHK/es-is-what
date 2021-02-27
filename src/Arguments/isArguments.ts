import getToStringTag from "../_utilities/getToStringTag";

import isArgumentsLike from "./isArgumentsLike";

const TO_STRING_TAG = "Arguments";

/**
 * Determine whether the payload is the `arguments` object or not.
 * 
 * @notes
 * The `arguments` object is an array-like object accessible inside functions that contains the
 * values of the arguments passed to that function.
 * 
 * @since 0.0.1
 * 
 * @param payload An value to be determined.
 * @returns The assertion result.
 * 
 * @example
 * ```typescript
 * isArguments(getArguments());
 * // > true
 * 
 * isArguments([]);
 * // > false
 * 
 * function getArguments() { return arguments; }
 * ```
 */
export default function isArguments(payload: unknown): payload is IArguments
{
    return (isArgumentsLike(payload) && (getToStringTag(payload) === TO_STRING_TAG));
}
