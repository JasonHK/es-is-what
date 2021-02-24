import * as Exported from "#src/BigInt";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(
        [
            "isBigInt",
            "isBigIntObject",
        ]);
});
