import isSymbol from "#src/Symbol/isSymbol";

describe(nameof(isSymbol), () =>
{
    it("should return true when the payload is a symbol value", () =>
    {
        expect(isSymbol(Symbol("foo"))).toBeTrue();
        expect(isSymbol(Symbol.for("bar"))).toBeTrue();
    });

    it("should return false when the payload is not a symbol value", () =>
    {
        expect(isSymbol(Object(Symbol("foo")))).toBeFalse();
    });
});
