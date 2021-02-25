import isCallable from "#src/Function/isCallable";

describe(nameof(isCallable), () =>
{
    it("should return true when the payload is a callable object", () =>
    {
        expect(isCallable(Function())).toBeTrue();
        expect(isCallable(function() {})).toBeTrue();
        expect(isCallable(() => {})).toBeTrue();
        expect(isCallable(class {})).toBeTrue();
    });

    it("should return false when the payload is not a callable object", () =>
    {
        expect(isCallable({})).toBeFalse();
    });
});
