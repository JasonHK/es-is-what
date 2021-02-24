import isNaN from "#src/Number/isNaN";

describe(nameof(isNaN), () =>
{
    it("should return true when the payload is NaN", () =>
    {
        expect(isNaN(Number.NaN)).toBeTrue();
    });

    it("should return false when the payload is not NaN", () =>
    {
        expect(isNaN(0)).toBeFalse();

        expect(isNaN(Number.MIN_VALUE)).toBeFalse();
        expect(isNaN(Number.MAX_VALUE)).toBeFalse();

        expect(isNaN(Number.POSITIVE_INFINITY)).toBeFalse();
        expect(isNaN(Number.NEGATIVE_INFINITY)).toBeFalse();

        expect(isNaN(new Number())).toBeFalse();
        expect(isNaN(new (class MyNumber extends Number {})())).toBeFalse();

        expect(isNaN(BigInt(0))).toBeFalse();
    });
});
