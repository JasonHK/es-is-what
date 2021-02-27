import * as Exported from "#src/RegExp";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isRegExp",
            "isRegExpLike",
        ]);
});
