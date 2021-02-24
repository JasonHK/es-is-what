interface IsNaN
{
    /**
     * Determine whether the payload is a `NaN` or not.
     * 
     * @since 0.0.1
     * 
     * @param payload An object to be determined.
     * @returns The assertion result.
     */
    (payload: unknown): boolean
}

const isNaN: IsNaN = Number.isNaN;

export default isNaN;
