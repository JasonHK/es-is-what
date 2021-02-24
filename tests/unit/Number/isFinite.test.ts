import isFinite from "#src/Number/isFinite";

describe(nameof(isFinite), () =>
{
    it("should return true when the payload is a finite number value", () =>
    {
        expect(isFinite(0)).toBeTrue();

        expect(isFinite(Number.MIN_VALUE)).toBeTrue();
        expect(isFinite(Number.MAX_VALUE)).toBeTrue();
    });

    it("should return false when the payload is not a finite number value", () =>
    {
        expect(isFinite(Number.POSITIVE_INFINITY)).toBeFalse();
        expect(isFinite(Number.NEGATIVE_INFINITY)).toBeFalse();

        expect(isFinite(Number.NaN)).toBeFalse();

        expect(isFinite(new Number())).toBeFalse();
        expect(isFinite(new (class MyNumber extends Number {})())).toBeFalse();

        expect(isFinite(BigInt(0))).toBeFalse();
    });
});
