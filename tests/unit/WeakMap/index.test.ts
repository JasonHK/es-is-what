import * as Exported from "#src/WeakMap";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isWeakMap",
        ]);
});
