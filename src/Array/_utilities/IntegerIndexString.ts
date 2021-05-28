import type IntegerIndexOpaque from "../_helpers/IntegerIndexOpaque";

/**
 * Represents a string whose value is an integer index.
 * 
 * @category Array
 * @since 0.0.1
 */
type IntegerIndexString<T extends `${ number }` = `${ number }`> = IntegerIndexOpaque<T>;

export default IntegerIndexString;
