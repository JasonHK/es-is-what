import isFunctionType from "#src/Function/isFunctionType";

describe(nameof(isFunctionType), () =>
{
    it("should return true when the payload is an \"function\" typed object", () =>
    {
        expect(isFunctionType(Function())).toBeTrue();
        expect(isFunctionType(function() {})).toBeTrue();
        expect(isFunctionType(() => {})).toBeTrue();
        expect(isFunctionType(class {})).toBeTrue();
    });

    it("should return false when the payload is not an \"function\" typed object", () =>
    {
        expect(isFunctionType({})).toBeFalse();
    });
});
