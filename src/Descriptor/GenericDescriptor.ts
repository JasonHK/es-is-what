import type { Except } from "type-fest";

type GenericDescriptor = Except<PropertyDescriptor, "get" | "set" | "value" | "writable">;

export default GenericDescriptor;
