import * as Exported from "#src/Date";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isDate",
        ]);
});
