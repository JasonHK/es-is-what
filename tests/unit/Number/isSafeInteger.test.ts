import isSafeInteger from "#src/Number/isSafeInteger";

describe(nameof(isSafeInteger), () =>
{
    it("should return true when the payload is a safe integer number value", () =>
    {
        expect(isSafeInteger(0)).toBeTrue();

        expect(isSafeInteger(Number.MIN_SAFE_INTEGER)).toBeTrue();
        expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toBeTrue();
    });

    it("should return false when the payload is not a safe integer number value", () =>
    {
        expect(isSafeInteger(Number.MIN_VALUE)).toBeFalse();
        expect(isSafeInteger(Number.MAX_VALUE)).toBeFalse();

        expect(isSafeInteger(new Number())).toBeFalse();
        expect(isSafeInteger(new (class MyNumber extends Number {})())).toBeFalse();

        expect(isSafeInteger(BigInt(0))).toBeFalse();
    });
});
