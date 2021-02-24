import isNumberObject from "#src/Number/isNumberObject";

describe(nameof(isNumberObject), () =>
{
    it("should return true when the payload is a Number instance", () =>
    {
        expect(isNumberObject(new Number())).toBeTrue();
        expect(isNumberObject(new (class MyNumber extends Number {})())).toBeTrue();
    });

    it("should return false when the payload is not a Number instance", () =>
    {
        expect(isNumberObject(0)).toBeFalse();

        expect(isNumberObject({})).toBeFalse();
    });
});
