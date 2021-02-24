import isNumber from "#src/Number/isNumber";

describe(nameof(isNumber), () =>
{
    it("should return true when the payload is a number value", () =>
    {
        expect(isNumber(0)).toBeTrue();

        expect(isNumber(Number.MIN_SAFE_INTEGER)).toBeTrue();
        expect(isNumber(Number.MAX_SAFE_INTEGER)).toBeTrue();

        expect(isNumber(Number.MIN_VALUE)).toBeTrue();
        expect(isNumber(Number.MAX_VALUE)).toBeTrue();

        expect(isNumber(Number.POSITIVE_INFINITY)).toBeTrue();
        expect(isNumber(Number.NEGATIVE_INFINITY)).toBeTrue();

        expect(isNumber(Number.NaN)).toBeTrue();
    });

    it("should return false when the payload is not a number value", () =>
    {
        expect(isNumber(new Number())).toBeFalse();
        expect(isNumber(new (class MyNumber extends Number {})())).toBeFalse();

        expect(isNumber(BigInt(0))).toBeFalse();
    });
});
