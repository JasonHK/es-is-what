"use strict";

import { TAG_SYMBOL } from "../internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";

import { isSymbol } from "./is-symbol";

/**
 * Determine whether the payload is a symbol-like object or not.
 * 
 * @remarks
 * Symbol-like means the payload is either a symbol or an object wrapped symbol primitive.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export function isSymbolLike(payload: unknown): payload is symbol | Symbol
{
    return (
        isSymbol(payload) ||
        (
            hasToStringTagOf<Symbol>(payload, TAG_SYMBOL) &&
            isSymbol(payload.valueOf())
        )
    );
}
