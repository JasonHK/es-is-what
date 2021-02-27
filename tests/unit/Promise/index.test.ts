import * as Exported from "#src/Promise";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isPromise",
            "isPromiseLike",
        ]);
});
