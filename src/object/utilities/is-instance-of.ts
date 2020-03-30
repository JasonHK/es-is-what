"use strict";

import { isAnyFunction } from "../../function/is-any-function";
import { isPrimitive } from "../../primitive/is-primitive";

import { IAnyFunction } from "../../function/interfaces/any-function";
import { IClass } from "../../function/interfaces/class";

export function isInstanceOf<TConstructor extends IAnyFunction, TInstance = TConstructor extends IClass ? InstanceType<TConstructor> : TConstructor>(payload: unknown, constructor: TConstructor): payload is TInstance
{
    if (!isAnyFunction(constructor))
    {
        throw new TypeError();
    }

    return (!isPrimitive(payload) && (payload instanceof constructor));
}
