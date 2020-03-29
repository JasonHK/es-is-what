"use strict";

export interface IAsyncFunction
{
    (...args: unknown[]): Promise<unknown>;
}
