import isNullLike from "#src/Null/isNullLike";

describe(nameof(isNullLike), () =>
{
    it("should return true when the payload is null-like", () =>
    {
        expect(isNullLike(null)).toBeTrue();
        expect(isNullLike(undefined)).toBeTrue();
    });

    it("should return false when the payload is not null-like", () =>
    {
        expect(isNullLike({})).toBeFalse();
    });
});
