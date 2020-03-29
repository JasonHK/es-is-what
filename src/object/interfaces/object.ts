"use strict";

/**
 * Representing a non-primitive object created by the `{}` object literal notation, or constructed
 * with `new Object()`.
 * 
 * @since 0.0.1
 */
export type IObject = Record<string | number | symbol, unknown>;
