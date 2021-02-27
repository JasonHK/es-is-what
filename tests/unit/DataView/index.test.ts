import * as Exported from "#src/DataView";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isDataView",
        ]);
});
