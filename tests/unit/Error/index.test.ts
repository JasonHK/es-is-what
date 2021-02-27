import * as Exported from "#src/Error";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isError",
            "isErrorLike",
        ]);
});
