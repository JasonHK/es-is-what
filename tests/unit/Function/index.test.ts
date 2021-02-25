import * as Exported from "#src/Function";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isCallable",
            "isConstructor",
            "isFunctionType",
        ]);
});
