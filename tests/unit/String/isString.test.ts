import isString from "#src/String/isString";

describe(nameof(isString), () =>
{
    it("should return true when the payload is a string value", () =>
    {
        expect(isString("")).toBeTrue();
        expect(isString("foo")).toBeTrue();
    });

    it("should return false when the payload is not a string value", () =>
    {
        expect(isString(new String())).toBeFalse();
        expect(isString(new (class MyString extends String {})())).toBeFalse();
    });
});
