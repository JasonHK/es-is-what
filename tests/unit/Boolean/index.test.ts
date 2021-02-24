import * as Exported from "#src/Boolean";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isBoolean",
            "isBooleanObject",
        ]);
});
