import getToStringTag from "#src/_utilities/getToStringTag";

describe(nameof(getToStringTag), () =>
{
    it("should return the string description of the payload", () =>
    {
        // Payloads without [Symbol.toStringTag] property:
        expect(getToStringTag("foo")).toBe("String");
        expect(getToStringTag({})).toBe("Object");

        // Payload with [Symbol.toStringTag] property:
        expect(getToStringTag({ [Symbol.toStringTag]: "Bar" })).toBe("Bar");
    });
});
