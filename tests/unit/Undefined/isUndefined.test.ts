import isUndefined from "#src/Undefined/isUndefined";

describe(nameof(isUndefined), () =>
{
    it("should return true when the payload is undefined", () =>
    {
        expect(isUndefined(undefined)).toBeTrue();
    });

    it("should return false when the payload is not undefined", () =>
    {
        expect(isUndefined(null)).toBeFalse();
    });
});
