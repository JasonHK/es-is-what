import hasToStringTag from "#src/Object/_utilities/hasToStringTag";

describe(nameof(hasToStringTag), () =>
{
    it("should return true when the payload is an object with [Symbol.toStringTag] property", () =>
    {
        expect(hasToStringTag({ [Symbol.toStringTag]: "foo" })).toBeTrue();
    });

    it("should return false when the payload is not an object", () =>
    {
        expect(hasToStringTag("not object")).toBeFalse();
    });

    it("should return false when the payload is an object but without [Symbol.toStringTag] property", () =>
    {
        expect(hasToStringTag({})).toBeFalse();
    });
});
