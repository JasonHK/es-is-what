import * as Exported from "#src/Array";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isArray",
            "isArrayLike",
            "isArrayLikeObject",

            // Exported from "./_utilities"
            "isLength",
            "isIntegerIndex",
            "isIntegerIndexLike",
        ]);
});
