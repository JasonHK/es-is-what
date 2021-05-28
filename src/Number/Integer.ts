import type NumberOpaque from "./_helpers/NumberOpaque";
import type NumberType from "./_helpers/NumberType";

type IntegerType =
    | NumberType.Integer
    | NumberType.SafeInteger
    | NumberType.NegativeZero;

/**
 * Represents a number whose value is an integer.
 * 
 * @category Number
 * @since 0.0.1
 */
type Integer<T extends number = number> = NumberOpaque<T, IntegerType>;

export default Integer;
