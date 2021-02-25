import isConstructor from "#src/Function/isConstructor";

describe(nameof(isConstructor), () =>
{
    it("should return true when the payload is a constructor object", () =>
    {
        expect(isConstructor(Function())).toBeTrue();
        expect(isConstructor(function() {})).toBeTrue();
        expect(isConstructor(class {})).toBeTrue();
    });

    it("should return false when the payload is not a constructor object", () =>
    {
        expect(isConstructor(() => {})).toBeFalse();

        expect(isConstructor({})).toBeFalse();
    });
});
