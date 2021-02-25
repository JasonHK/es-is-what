import * as Exported from "#src/Object";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isObject",
            "isObjectType",
            "isPlainObject",

            // Exported from "./_utilities":
            "hasToStringTag",
            "getToStringTag",
        ]);
});
