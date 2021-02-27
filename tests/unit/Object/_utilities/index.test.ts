import * as Exported from "#src/Object/_utilities";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isPropertyKey",
        ]);
});
