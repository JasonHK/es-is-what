import isNull from "../Null/isNull";

import type ObjectType from "./ObjectType";

/**
 * Determine whether the payload is or is not a non-primitive object except for function.
 * 
 * @notes
 * `null` is not considered as a non-primitive object.
 * 
 * @since 0.0.1
 * 
 * @template T The expected type of the object.
 * @param payload An value to be determined.
 * @returns The assertion result.
 */
export default function isObjectType<T extends object = ObjectType>(payload: unknown): payload is T
{
    return ((typeof payload === "object") && !isNull(payload));
}
