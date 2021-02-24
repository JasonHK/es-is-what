import * as Exported from "#src/Number";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isNumber",
            "isValidNumber",
            "isFinite",
            "isInteger",
            "isSafeInteger",
            "isNaN",
            "isNumberObject",
        ]);
});
