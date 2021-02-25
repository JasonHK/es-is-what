import * as Exported from "#src/Iterable";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isIterable",
            "isAsyncIterable",
        ]);
});
