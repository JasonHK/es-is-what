import isArrayLike from "#src/Array/isArrayLike";

describe(nameof(isArrayLike), () =>
{
    it("should return true when the payload is an Array-like value", () =>
    {
        // Objects
        expect(isArrayLike({ length: 0 })).toBeTrue();

        // Primitives
        expect(isArrayLike("foo")).toBeTrue();
    });

    it("should return false when the payload is not an Array-like value", () =>
    {
        // Objects
        expect(isArrayLike({})).toBeFalse();
        expect(isArrayLike(Function)).toBeFalse();

        // Primitives
        expect(isArrayLike(undefined)).toBeFalse();
        expect(isArrayLike(null)).toBeFalse();
        expect(isArrayLike(false)).toBeFalse();
        expect(isArrayLike(Symbol())).toBeFalse();
        expect(isArrayLike(0)).toBeFalse();
        expect(isArrayLike(0n)).toBeFalse();
    });
});
