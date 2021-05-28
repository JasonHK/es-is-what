import type BadArguments from "./BadArguments";

export interface $apply
{
    (target: unknown, thisArgument: unknown, argumentsList: BadArguments): never;
    (target: Function, thisArgument: unknown, argumentsList: ArrayLike<unknown>): unknown;
}

export interface $construct
{
    (target: unknown, argumentsList: BadArguments, newTarget?: unknown): never;
    (target: Function, argumentsList: ArrayLike<unknown>, newTarget?: Function): unknown;
}
