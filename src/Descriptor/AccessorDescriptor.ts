import type { RequireAtLeastOne } from "type-fest";

type AccessorDescriptor = RequireAtLeastOne<PropertyDescriptor, "get" | "set">;

export default AccessorDescriptor;
