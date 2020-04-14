"use strict";

/**
 * Representing a primitive value.
 * 
 * @remarks
 * Primitive means the payload is not an `Object` and has no methods.
 * 
 * @remarks
 * The primitive types JavaScript currently have were:
 * 
 * - `bigint`
 * - `boolean`
 * - `null`
 * - `number`
 * - `string`
 * - `symbol`
 * - `undefined`
 * 
 * @since 0.0.1
 */
export type IPrimitive = bigint | boolean | null | number | string | symbol | undefined;
