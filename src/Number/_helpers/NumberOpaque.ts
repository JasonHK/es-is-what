import type NumberType from "./NumberType";

declare const __number__: unique symbol;

type NumberOpaque<T extends number, TType extends NumberType> = T & { readonly [__number__]: TType; };

export default NumberOpaque;
