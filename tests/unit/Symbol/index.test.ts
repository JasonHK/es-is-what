import * as Exported from "#src/Symbol";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isSymbol",
            "isSymbolObject",
        ]);
});
