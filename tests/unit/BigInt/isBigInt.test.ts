import isBigInt from "#src/BigInt/isBigInt";

describe(nameof(isBigInt), () =>
{
    it("should return true when the payload is a bigint value", () =>
    {
        expect(isBigInt(BigInt(0))).toBeTrue();
    });

    it("should return false when the payload is not a bigint value", () =>
    {
        expect(isBigInt(Object(BigInt(0)))).toBeFalse();
    });
});
