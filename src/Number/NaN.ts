import type NumberOpaque from "./_helpers/NumberOpaque";
import type NumberType from "./_helpers/NumberType";

/**
 * Represents a number whose value is `NaN`.
 * 
 * @category Number
 * @since 0.0.1
 */
type NaN = NumberOpaque<number, NumberType.NaN>;

export default NaN;
