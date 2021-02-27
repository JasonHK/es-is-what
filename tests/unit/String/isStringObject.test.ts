import isStringObject from "#src/String/isStringObject";

describe(nameof(isStringObject), () =>
{
    it("should return true when the payload is a String instance", () =>
    {
        expect(isStringObject(new String())).toBeTrue();
        expect(isStringObject(new (class MyString extends String {})())).toBeTrue();
    });

    it("should return false when the payload is not a String instance", () =>
    {
        expect(isStringObject("")).toBeFalse();
        expect(isStringObject("foo")).toBeFalse();

        expect(isStringObject({})).toBeFalse();
    });
});
