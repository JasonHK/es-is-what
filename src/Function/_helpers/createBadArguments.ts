import type BadArguments from "./BadArguments";

export default function createBadArguments(marker: unknown): BadArguments
{
    return Object.defineProperty(
        {}, "length",
        {
            enumerable: true,
            get: () => { throw marker; },
        });
}
