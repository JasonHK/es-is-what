import isIntegerIndexLike from "#src/Array/_utilities/isIntegerIndexLike";

describe(nameof(isIntegerIndexLike), () =>
{
    it("should return true when the payload is an integer-index-like value", () =>
    {
        // Numbers
        expect(isIntegerIndexLike(0)).toBeTrue();

        expect(isIntegerIndexLike(9007199254740990)).toBeTrue();
        expect(isIntegerIndexLike(9, 10)).toBeTrue();

        // Strings
        expect(isIntegerIndexLike("0")).toBeTrue();

        expect(isIntegerIndexLike("9007199254740990")).toBeTrue();
        expect(isIntegerIndexLike("9", 10)).toBeTrue();
    });

    it("should return false when the payload is not an integer-index-like value", () =>
    {
        // Numbers
        expect(isIntegerIndexLike(-1)).toBeFalse();
        expect(isIntegerIndexLike(-0)).toBeFalse();

        expect(isIntegerIndexLike(9007199254740991)).toBeFalse();
        expect(isIntegerIndexLike(10, 10)).toBeFalse();

        // Strings
        expect(isIntegerIndexLike("-1")).toBeFalse();
        expect(isIntegerIndexLike("-0")).toBeFalse();
        expect(isIntegerIndexLike("+0")).toBeFalse();

        expect(isIntegerIndexLike("9007199254740991")).toBeFalse();
        expect(isIntegerIndexLike("10", 10)).toBeFalse();

        expect(isIntegerIndexLike("")).toBeFalse();
        expect(isIntegerIndexLike("foo")).toBeFalse();

        // Primitives
        expect(isIntegerIndexLike(undefined)).toBeFalse();
        expect(isIntegerIndexLike(null)).toBeFalse();
        expect(isIntegerIndexLike(false)).toBeFalse();
        expect(isIntegerIndexLike(Symbol())).toBeFalse();
        expect(isIntegerIndexLike(0n)).toBeFalse();

        // Objects
        expect(isIntegerIndexLike({})).toBeFalse();
    });
});
