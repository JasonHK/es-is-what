import * as Exported from "#src/Undefined";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isUndefined",
        ]);
});
