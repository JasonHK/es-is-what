import isObject from "#src/Object/isObject";

describe(nameof(isObject), () =>
{
    it("should return true when the payload is an object", () =>
    {
        expect(isObject({})).toBeTrue();
        expect(isObject(Function())).toBeTrue();
    });

    it("should return false when the payload is not an object", () =>
    {
        expect(isObject(undefined)).toBeFalse();
        expect(isObject(null)).toBeFalse();

        expect(isObject("foo")).toBeFalse();
        expect(isObject(0)).toBeFalse();
        expect(isObject(true)).toBeFalse();
        expect(isObject(Symbol())).toBeFalse();
        expect(isObject(BigInt(0))).toBeFalse();
    });
});
