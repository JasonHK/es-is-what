"use strict";

import { IAsyncFunction } from "./async-function";
import { IAsyncGeneratorFunction } from "./async-generator-function";
import { IClass } from "./class";
import { IFunction } from "./function";
import { IGeneratorFunction } from "./generator-function";

export type IAnyFunction = IFunction | IAsyncFunction | IGeneratorFunction | IAsyncGeneratorFunction | IClass;
