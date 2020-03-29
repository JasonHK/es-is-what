"use strict";

export interface IAsyncGeneratorFunction
{
    (...args: unknown[]): AsyncGenerator;
}
