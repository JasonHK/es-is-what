/**
 * Represents an object which has a `[[Construct]]` internal method.
 */
export default interface Constructor
{
    new(...args: unknown[]): unknown;
}
