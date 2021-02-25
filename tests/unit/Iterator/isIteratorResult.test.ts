import isIteratorResult from "#src/Iterator/isIteratorResult";

describe(nameof(isIteratorResult), () =>
{
    it("should return true when the payload is an IteratorResult object", () =>
    {
        expect(isIteratorResult({ value: undefined })).toBeTrue();
        expect(isIteratorResult({ value: undefined, done: true })).toBeTrue();
    });

    it("should return false when the payload is not an IteratorResult object", () =>
    {
        expect(isIteratorResult({})).toBeFalse();
    });
});
