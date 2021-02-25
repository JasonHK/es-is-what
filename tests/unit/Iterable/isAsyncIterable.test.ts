import isAsyncIterable from "#src/Iterable/isAsyncIterable";

describe(nameof(isAsyncIterable), () =>
{
    it("should return true when the payload is an AsyncIterable object", () =>
    {
        expect(isAsyncIterable({ [Symbol.asyncIterator]: () => {} })).toBeTrue();
    });

    it("should return false when the payload is an AsyncIterable object", () =>
    {
        expect(isAsyncIterable({})).toBeFalse();
    });
});
