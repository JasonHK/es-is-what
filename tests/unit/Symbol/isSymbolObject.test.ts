import isSymbolObject from "#src/Symbol/isSymbolObject";

describe(nameof(isSymbolObject), () =>
{
    it("should return true when the payload is a Symbol instance", () =>
    {
        expect(isSymbolObject(Object(Symbol("foo")))).toBeTrue();
    });

    it("should return false when the payload is not a Symbol instance", () =>
    {
        expect(isSymbolObject(Symbol("foo"))).toBeFalse();
        expect(isSymbolObject(Symbol.for("bar"))).toBeFalse();

        expect(isSymbolObject({})).toBeFalse();
    });
});
