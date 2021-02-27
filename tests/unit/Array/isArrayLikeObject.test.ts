import isArrayLikeObject from "#src/Array/isArrayLikeObject";

describe(nameof(isArrayLikeObject), () =>
{
    it("should return true when the payload is an Array-like value", () =>
    {
        // Objects
        expect(isArrayLikeObject({ length: 0 })).toBeTrue();
    });

    it("should return false when the payload is not an Array-like value", () =>
    {
        // Objects
        expect(isArrayLikeObject({})).toBeFalse();
        expect(isArrayLikeObject(Function)).toBeFalse();

        // Primitives
        expect(isArrayLikeObject(undefined)).toBeFalse();
        expect(isArrayLikeObject(null)).toBeFalse();
        expect(isArrayLikeObject(false)).toBeFalse();
        expect(isArrayLikeObject("foo")).toBeFalse();
        expect(isArrayLikeObject(Symbol())).toBeFalse();
        expect(isArrayLikeObject(0)).toBeFalse();
        expect(isArrayLikeObject(0n)).toBeFalse();
    });
});

