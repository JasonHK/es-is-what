import * as Exported from "#src/Iterator";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isIteratorLike",
            "isIteratorResult",
        ]);
});
