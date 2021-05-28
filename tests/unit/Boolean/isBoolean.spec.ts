import { expect } from "chai";

import { isBoolean } from "#src/index";

describe(nameof(isBoolean), () =>
{
    it("should return true when the payload is true", () =>
    {
        expect(isBoolean(true)).to.be.true;
    });

    it("should return true when the payload is false", () =>
    {
        expect(isBoolean(false)).to.be.true;
    });

    it("should return false when the payload is an instance of Boolean", () =>
    {
        expect(isBoolean(new Boolean())).to.be.false;
    });
});
