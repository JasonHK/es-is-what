import isRegExp from "#src/RegExp/isRegExp";

describe(nameof(isRegExp), () =>
{
    it("should return true when the payload is a RegExp literal", () =>
    {
        expect(isRegExp(/./)).toBeTrue();
    });

    it("should return true when the payload is an instance of RegExp", () =>
    {
        expect(isRegExp(new RegExp(""))).toBeTrue();
    });

    it("should return true when the payload is an instance of a subclass of RegExp", () =>
    {
        class MyRegExp extends RegExp {}
        expect(isRegExp(new MyRegExp(""))).toBeTrue();
    });

    it("should return false when the payload is RegExp.prototype", () =>
    {
        expect(isRegExp(RegExp.prototype)).toBeFalse();
    });

    it("should return false when the payload is a proxy of a RegExp literal", () =>
    {
        expect(isRegExp(new Proxy(/./, {}))).toBeFalse();
    });

    it("should return false when the payload is a RegExp-like object", () =>
    {
        expect(isRegExp({ [Symbol.match]: () => {} })).toBeFalse();
    });
});
