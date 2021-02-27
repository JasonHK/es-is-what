import isArray from "#src/Array/isArray";

describe(nameof(isArray), () =>
{
    it("should return true when the payload is an Array instance", () =>
    {
        // Arrays
        expect(isArray([])).toBeTrue();
    });

    it("should return false when the payload is not an Array instance", () =>
    {
        // Objects
        expect(isArray({ length: 0 })).toBeFalse();

        // Primitives
        expect(isArray(undefined)).toBeFalse();
        expect(isArray(null)).toBeFalse();
        expect(isArray(false)).toBeFalse();
        expect(isArray("")).toBeFalse();
        expect(isArray(Symbol())).toBeFalse();
        expect(isArray(0)).toBeFalse();
        expect(isArray(0n)).toBeFalse();
    });
});
