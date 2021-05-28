/**
 * Represents an object which has a `[[Call]]` internal method.
 */
export default interface Callable
{
    (...args: unknown[]): unknown;
}
