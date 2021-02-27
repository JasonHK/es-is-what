import isArrayLike from "../Array/isArrayLike";

import isMap from "../Map/isMap";
import isSet from "../Set/isSet";

import isArrayBuffer from "../ArrayBuffer/isArrayBuffer";
import isSharedArrayBuffer from "../SharedArrayBuffer/isSharedArrayBuffer";
import isDataView from "../DataView/isDataView";

import isIterable from "../Iterable/isIterable";
import isIteratorLike from "../Iterator/isIteratorLike";
import isIteratorResult from "../Iterator/isIteratorResult";

export default function isEmpty(payload: unknown): boolean
{
    if (isArrayLike(payload))
    {
        return (payload.length === 0);
    }
    else if (isMap(payload) || isSet(payload))
    {
        return (payload.size === 0);
    }
    else if (isArrayBuffer(payload) || isSharedArrayBuffer(payload) || isDataView(payload))
    {
        return (payload.byteLength === 0);
    }
    else if (isIterable(payload) && !isIteratorLike(payload))
    {
        const iteration = payload[Symbol.iterator]().next();
        return (isIteratorResult(iteration) && (iteration.done ?? false));
    }

    return false;
}
