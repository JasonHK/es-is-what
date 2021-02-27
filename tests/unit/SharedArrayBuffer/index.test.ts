import * as Exported from "#src/SharedArrayBuffer";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isSharedArrayBuffer",
        ]);
});
