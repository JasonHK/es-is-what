"use strict";

import { TAG_BIG_INT } from "../internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";

import { isBigInt } from "./is-bigint";

/**
 * Determine whether the payload is a bigint-like object or not.
 * 
 * @remarks
 * BigInt-like means the payload is either a bigint or an object wrapped bigint primitive.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export function isBigIntLike(payload: unknown): payload is bigint | BigInt
{
    return (
        isBigInt(payload) ||
        (
            hasToStringTagOf<BigInt>(payload, TAG_BIG_INT) &&
            isBigInt(payload.valueOf())
        )
    );
}
