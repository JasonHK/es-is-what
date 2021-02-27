import type { RequireAtLeastOne } from "type-fest";

type DataDescriptor = RequireAtLeastOne<PropertyDescriptor, "value" | "writable">;

export default DataDescriptor;
