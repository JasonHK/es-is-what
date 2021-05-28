import type NumberOpaque from "./_helpers/NumberOpaque";
import type NumberType from "./_helpers/NumberType";

type SafeIntegerType =
    | NumberType.SafeInteger
    | NumberType.NegativeZero;

/**
 * Represents a number whose value is a safe integer.
 * 
 * @category Number
 * @since 0.0.1
 */
type SafeInteger<T extends number = number> = NumberOpaque<T, SafeIntegerType>;

export default SafeInteger;
