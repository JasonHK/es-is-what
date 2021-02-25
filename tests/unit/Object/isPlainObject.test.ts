import isPlainObject from "#src/Object/isPlainObject";

describe(nameof(isPlainObject), () =>
{
    it("should return true when the payload is a plain object", () =>
    {
        expect(isPlainObject({})).toBeTrue();
        expect(isPlainObject(Object.create(null))).toBeTrue();
    });

    it("should return false when the payload is not a plain object", () =>
    {
        expect(isPlainObject(new String())).toBeFalse();
        expect(isPlainObject(Function())).toBeFalse();
    });
});
