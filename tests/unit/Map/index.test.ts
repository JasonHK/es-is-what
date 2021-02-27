import * as Exported from "#src/Map";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isMap",
        ]);
});
