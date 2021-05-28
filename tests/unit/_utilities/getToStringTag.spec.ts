import { expect } from "chai";

import { getToStringTag } from "#src/index";

describe(nameof(getToStringTag), () =>
{
    context("returns a string description", () =>
    {
        specify("when the payload is a primitive", () =>
        {
            expect(getToStringTag(undefined)).to.equal("Undefined");
            expect(getToStringTag(null)).to.equal("Null");
            expect(getToStringTag(false)).to.equal("Boolean");
            expect(getToStringTag("")).to.equal("String");
            expect(getToStringTag(Symbol())).to.equal("Symbol");
            expect(getToStringTag(0)).to.equal("Number");
            expect(getToStringTag(0n)).to.equal("BigInt");
        });

        specify("when the payload is an object which doesn't have the [@@toStringTag] property", () =>
        {
            expect(getToStringTag({})).to.equal("Object");
        });

        specify("when the payload is an object which has the [@@toStringTag] property", () =>
        {
            const payload = { [Symbol.toStringTag]: "Overridden" };
            expect(getToStringTag(payload)).to.equal("Overridden");
        });
    });
});
