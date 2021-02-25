import type Callable from "./Callable";

import createBadArguments from "./_utilities/createBadArguments";
import type { BadArguments } from "./_utilities/createBadArguments";

declare global
{
    namespace Reflect
    {
        function apply(target: unknown, thisArgument: any, argumentsList: BadArguments): never;
    }
}

const MARKER: object = Object.create(null);
const BAD_ARGUMENTS = createBadArguments(MARKER);

export default function isCallable<T extends Callable = Callable>(payload: unknown): payload is T
{
    try { Reflect.apply(payload, undefined, BAD_ARGUMENTS); } catch (error) { return (error === MARKER); }
}
