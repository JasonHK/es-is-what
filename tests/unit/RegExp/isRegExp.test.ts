import isRegExp from "#src/RegExp/isRegExp";

describe(nameof(isRegExp), () =>
{
    it("should return true when the payload is a RegExp instance", () =>
    {
        expect(isRegExp(/./)).toBeTrue();
        expect(isRegExp(new RegExp(""))).toBeTrue();

        {
            class MyRegExp extends RegExp {}
            expect(isRegExp(new MyRegExp(""))).toBeTrue();
        }
    });

    it("should return false when the payload is not a RegExp instance", () =>
    {
        expect(isRegExp(RegExp.prototype)).toBeFalse();
        expect(isRegExp(new Proxy(/./, {}))).toBeFalse();

        expect(isRegExp({ [Symbol.match]: () => {} })).toBeFalse();

        expect(isRegExp({})).toBeFalse();
    });
});
