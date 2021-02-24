/**
 * Determine whether the payload is a symbol or not.
 * 
 * @since 0.0.1
 * 
 * @param payload An object to be determined.
 * @returns The assertion result.
 */
export default function isSymbol(payload: unknown): payload is symbol
{
    return (typeof payload === "symbol");
}
