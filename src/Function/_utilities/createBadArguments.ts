export interface BadArguments extends ArrayLike<never>
{
    readonly length: never;
}

export default function createBadArguments(marker: unknown): BadArguments
{
    return Object.defineProperty(
        {}, "length",
        {
            enumerable: true,
            get: () => { throw marker; },
        });
}
