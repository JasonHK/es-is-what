import isRegExpLike from "#src/RegExp/isRegExpLike";

describe(nameof(isRegExpLike), () =>
{
    it("should return true when the payload is a RegExp-like object", () =>
    {
        expect(isRegExpLike(/./)).toBeTrue();
        expect(isRegExpLike(new RegExp(""))).toBeTrue();

        {
            class MyRegExp extends RegExp {}
            expect(isRegExpLike(new MyRegExp(""))).toBeTrue();
        }

        expect(isRegExpLike(RegExp.prototype)).toBeTrue();
        expect(isRegExpLike(new Proxy(/./, {}))).toBeTrue();

        expect(isRegExpLike({ [Symbol.match]: () => {} })).toBeTrue();
    });

    it("should return false when the payload is not a RegExp-like object", () =>
    {
        expect(isRegExpLike({})).toBeFalse();
    });
});
