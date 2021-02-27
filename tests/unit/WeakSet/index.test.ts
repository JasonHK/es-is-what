import * as Exported from "#src/WeakSet";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isWeakSet",
        ]);
});
