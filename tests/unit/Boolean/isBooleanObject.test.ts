import isBooleanObject from "#src/Boolean/isBooleanObject";

describe(nameof(isBooleanObject), () =>
{
    it("should return true when the payload is a Boolean instance", () =>
    {
        expect(isBooleanObject(new Boolean())).toBeTrue();
        expect(isBooleanObject(new (class MyBoolean extends Boolean {})())).toBeTrue();
    });

    it("should return false when the payload is not a Boolean instance", () =>
    {
        expect(isBooleanObject(true)).toBeFalse();
        expect(isBooleanObject(false)).toBeFalse();

        expect(isBooleanObject({})).toBeFalse();
    });
});
