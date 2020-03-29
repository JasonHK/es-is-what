"use strict";

export interface IGeneratorFunction
{
    (...args: unknown[]): Generator;
}
