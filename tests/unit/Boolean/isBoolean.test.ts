import isBoolean from "#src/Boolean/isBoolean";

describe(nameof(isBoolean), () =>
{
    it("should return true when the payload is a boolean value", () =>
    {
        expect(isBoolean(true)).toBeTrue();
        expect(isBoolean(false)).toBeTrue();
    });

    it("should return false when the payload is not a boolean value", () =>
    {
        expect(isBoolean(new Boolean())).toBeFalse();
        expect(isBoolean(new (class MyBoolean extends Boolean {})())).toBeFalse();
    });
});
