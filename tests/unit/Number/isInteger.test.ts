import isInteger from "#src/Number/isInteger";

describe(nameof(isInteger), () =>
{
    it("should return true when the payload is an integer number value", () =>
    {
        expect(isInteger(0)).toBeTrue();

        expect(isInteger(Number.MIN_SAFE_INTEGER)).toBeTrue();
        expect(isInteger(Number.MAX_SAFE_INTEGER)).toBeTrue();

        expect(isInteger(Number.MAX_VALUE)).toBeTrue();
    });

    it("should return false when the payload is not an integer number value", () =>
    {
        expect(isInteger(Number.MIN_VALUE)).toBeFalse();

        expect(isInteger(new Number())).toBeFalse();
        expect(isInteger(new (class MyNumber extends Number {})())).toBeFalse();

        expect(isInteger(BigInt(0))).toBeFalse();
    });
});
