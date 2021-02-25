import isIteratorLike from "#src/Iterator/isIteratorLike";

describe(nameof(isIteratorLike), () =>
{
    it("should return true when the payload is an Iterator-like object", () =>
    {
        expect(isIteratorLike({ next: () => {} })).toBeTrue();
        expect(isIteratorLike({ next: () => {}, return: () => {} })).toBeTrue();
        expect(isIteratorLike({ next: () => {}, throw: () => {} })).toBeTrue();
        expect(isIteratorLike({ next: () => {}, return: () => {}, throw: () => {} })).toBeTrue();
    });

    it("should return false when the payload is not an Iterator-like object", () =>
    {
        expect(isIteratorLike({})).toBeFalse();
    });
});
