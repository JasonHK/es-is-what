declare const __index__: unique symbol;

/**
 * An [opaque type](https://codemix.com/opaque-types-in-javascript/) for integer index values.
 * 
 * @internal
 */
type IntegerIndexOpaque<T> = T & { readonly [__index__]: true; };

export default IntegerIndexOpaque;
