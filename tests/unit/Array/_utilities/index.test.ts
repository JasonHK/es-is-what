import * as Exported from "#src/Array/_utilities";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isLength",
            "isIntegerIndex",
            "isIntegerIndexLike",
        ]);
});
