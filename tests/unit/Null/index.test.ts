import * as Exported from "#src/Null";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isNull",
            "isNullLike",
        ]);
});
