import type SafeInteger from "../../Number/SafeInteger";

import type IntegerIndexOpaque from "../_helpers/IntegerIndexOpaque";

/**
 * Represents a number whose value is an integer index.
 * 
 * @category Array
 * @since 0.0.1
 */
type IntegerIndex<T extends number = number> = IntegerIndexOpaque<SafeInteger<T>>;

export default IntegerIndex;
