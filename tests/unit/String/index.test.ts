import * as Exported from "#src/String";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isString",
            "isStringObject",
        ]);
});
