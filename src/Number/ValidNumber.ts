import type NumberOpaque from "./_helpers/NumberOpaque";
import type NumberType from "./_helpers/NumberType";

type ValidNumberType =
    | NumberType.Infinity
    | NumberType.Finite
    | NumberType.Integer
    | NumberType.SafeInteger
    | NumberType.NegativeZero;

/**
 * Represents a number whose value is not `NaN`.
 * 
 * @category Number
 * @since 0.0.1
 */
type ValidNumber<T extends number = number> = NumberOpaque<T, ValidNumberType>;

export default ValidNumber;
