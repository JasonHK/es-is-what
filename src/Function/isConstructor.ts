import type Constructor from "./Constructor";

import createBadArguments from "./_utilities/createBadArguments";
import type { BadArguments } from "./_utilities/createBadArguments";

declare global
{
    namespace Reflect
    {
        function construct(target: unknown, argumentsList: BadArguments, newTarget?: any): never;
    }
}

const MARKER: object = Object.create(null);
const BAD_ARGUMENTS = createBadArguments(MARKER);

export default function isConstructor<T extends Constructor = Constructor>(payload: unknown): payload is T
{
    try { Reflect.construct(payload, BAD_ARGUMENTS); } catch (error) { return (error === MARKER); }
}
