import isObjectType from "#src/Object/isObjectType";

describe(nameof(isObjectType), () =>
{
    it("should return true when the payload is an \"object\" typed object", () =>
    {
        expect(isObjectType({})).toBeTrue();
        expect(isObjectType(Object.create(null))).toBeTrue();
        expect(isObjectType(new Number(0))).toBeTrue();
    });

    it("should return false when the payload is not an \"object\" typed object", () =>
    {
        expect(isObjectType(() => {})).toBeFalse();

        expect(isObjectType("foo")).toBeFalse();
    });
});
