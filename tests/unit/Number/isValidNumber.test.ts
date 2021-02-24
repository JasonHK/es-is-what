import isValidNumber from "#src/Number/isValidNumber";

describe(nameof(isValidNumber), () =>
{
    it("should return true when the payload is a valid number value", () =>
    {
        expect(isValidNumber(0)).toBeTrue();

        expect(isValidNumber(Number.MIN_SAFE_INTEGER)).toBeTrue();
        expect(isValidNumber(Number.MAX_SAFE_INTEGER)).toBeTrue();

        expect(isValidNumber(Number.MIN_VALUE)).toBeTrue();
        expect(isValidNumber(Number.MAX_VALUE)).toBeTrue();

        expect(isValidNumber(Number.POSITIVE_INFINITY)).toBeTrue();
        expect(isValidNumber(Number.NEGATIVE_INFINITY)).toBeTrue();
    });

    it("should return false when the payload is not a valid number value", () =>
    {
        expect(isValidNumber(Number.NaN)).toBeFalse();

        expect(isValidNumber(new Number())).toBeFalse();
        expect(isValidNumber(new (class MyNumber extends Number {})())).toBeFalse();

        expect(isValidNumber(BigInt(0))).toBeFalse();
    });
});
