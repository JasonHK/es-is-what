"use strict";

import { isAnyFunction } from "../../function/is-any-function";
import { isPrimitive } from "../../primitive/is-primitive";

import { IAnyFunction } from "../../function/interfaces/any-function";
import { IClass } from "../../function/interfaces/class";

export function isInstanceOf<TConstructor extends IAnyFunction, TInstance = TConstructor extends IClass ? InstanceType<TConstructor> : TConstructor>(object: unknown, constructor: TConstructor): object is TInstance
{
    if (!isAnyFunction(constructor))
    {
        throw new TypeError();
    }

    return (!isPrimitive(object) && (object instanceof constructor));
}
