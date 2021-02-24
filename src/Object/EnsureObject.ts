/**
 * Ensure the type to be an object.
 * 
 * @template T The actual type of the object.
 */
type EnsureObject<T extends object> = object & T;

export default EnsureObject;
