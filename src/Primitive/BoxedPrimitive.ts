import type EnsureObject from "../Object/EnsureObject";

type PrimitiveWrapper =
    | Boolean
    | String
    | Symbol
    | Number
    | BigInt;

type BoxedPrimitive<T extends PrimitiveWrapper = PrimitiveWrapper> = EnsureObject<T>;

export default BoxedPrimitive;
