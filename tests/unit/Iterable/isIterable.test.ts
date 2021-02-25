import isIterable from "#src/Iterable/isIterable";

describe(nameof(isIterable), () =>
{
    it("should return true when the payload is an Iterable object", () =>
    {
        expect(isIterable({ [Symbol.iterator]: () => {} })).toBeTrue();
    });

    it("should return false when the payload is an Iterable object", () =>
    {
        expect(isIterable({})).toBeFalse();
    });
});
