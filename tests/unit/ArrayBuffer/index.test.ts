import * as Exported from "#src/ArrayBuffer";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isArrayBuffer",
            "isArrayBufferView",
        ]);
});
