import isNull from "#src/Null/isNull";

describe(nameof(isNull), () =>
{
    it("should return true when the payload is null", () =>
    {
        expect(isNull(null)).toBeTrue();
    });

    it("should return false when the payload is not null", () =>
    {
        expect(isNull(undefined)).toBeFalse();
    });
});
