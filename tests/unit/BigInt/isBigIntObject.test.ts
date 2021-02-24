import isBigIntObject from "#src/BigInt/isBigIntObject";

describe(nameof(isBigIntObject), () =>
{
    it("should return true when the payload is a BigInt instance", () =>
    {
        expect(isBigIntObject(Object(BigInt(0)))).toBeTrue();
    });

    it("should return false when the payload is not a BigInt instance", () =>
    {
        expect(isBigIntObject(BigInt(0))).toBeFalse();

        expect(isBigIntObject({})).toBeFalse();
    });
});
