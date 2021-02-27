import isIntegerIndex from "#src/Array/_utilities/isIntegerIndex";

describe(nameof(isIntegerIndex), () =>
{
    it("should return true when the payload is an integer-index value", () =>
    {
        // Numbers
        expect(isIntegerIndex(0)).toBeTrue();

        expect(isIntegerIndex(Number.MAX_SAFE_INTEGER - 1)).toBeTrue();
        expect(isIntegerIndex(9, 10)).toBeTrue();
    });

    it("should return false when the payload is not an integer-index value", () =>
    {
        // Numbers
        expect(isIntegerIndex(-1)).toBeFalse();
        expect(isIntegerIndex(-0)).toBeFalse();

        expect(isIntegerIndex(Number.MAX_SAFE_INTEGER)).toBeFalse();
        expect(isIntegerIndex(10, 10)).toBeFalse();

        // Strings
        expect(isIntegerIndex("0")).toBeFalse();

        // Primitives
        expect(isIntegerIndex(undefined)).toBeFalse();
        expect(isIntegerIndex(null)).toBeFalse();
        expect(isIntegerIndex(false)).toBeFalse();
        expect(isIntegerIndex(Symbol())).toBeFalse();
        expect(isIntegerIndex(0n)).toBeFalse();

        // Objects
        expect(isIntegerIndex({})).toBeFalse();
    });
});
