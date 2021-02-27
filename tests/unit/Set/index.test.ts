import * as Exported from "#src/Set";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isSet",
        ]);
});
