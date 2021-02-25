import type Callable from "./Callable";

export default function isFunctionType<T extends Callable = Callable>(payload: unknown): payload is T
{
    return (typeof payload === "function");
}
