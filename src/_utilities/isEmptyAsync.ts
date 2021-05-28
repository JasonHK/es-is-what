import isAsyncIterable from "../Iterable/isAsyncIterable";
import isIteratorLike from "../Iterator/isIteratorLike";
import isIteratorResult from "../Iterator/isIteratorResult";

import isEmpty from "./isEmpty";

export default async function isEmptyAsync(payload: unknown): Promise<boolean>
{
    if (isEmpty(payload))
    {
        return true;
    }
    else if (isAsyncIterable(payload) && !isIteratorLike(payload))
    {
        const iteration = await payload[Symbol.asyncIterator]().next();
        return (isIteratorResult(iteration) && !!iteration.done);
    }

    return false;
}
