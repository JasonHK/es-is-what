import isPropertyKey from "#src/Object/_utilities/isPropertyKey";

describe(nameof(isPropertyKey), () =>
{
    it("should return true when the payload is a property key", () =>
    {
        expect(isPropertyKey("foo")).toBeTrue();
        expect(isPropertyKey(Symbol())).toBeTrue();
        expect(isPropertyKey(0)).toBeTrue();
    });

    it("should return false when the payload is not a property key", () =>
    {
        expect(isPropertyKey({})).toBeFalse();
    });
});
