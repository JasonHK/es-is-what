import type NumberOpaque from "./_helpers/NumberOpaque";
import type NumberType from "./_helpers/NumberType";

type FiniteType =
    | NumberType.Finite
    | NumberType.Integer
    | NumberType.SafeInteger
    | NumberType.NegativeZero;

/**
 * Represents a number whose value is a finite number.
 * 
 * @category Number
 * @since 0.0.1
 */
type Finite<T extends number = number> = NumberOpaque<T, FiniteType>;

export default Finite;
