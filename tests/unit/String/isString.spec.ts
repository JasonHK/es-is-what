import { expect } from "chai";

import { isString } from "#src/index";

describe(nameof(isString), () =>
{
    it("should return true when the payload is a empty string", () =>
    {
        expect(isString("")).to.be.true;
    });

    it("should return true when the payload is a non-empty string", () =>
    {
        expect(isString("Hello, world!")).to.be.true;
    });

    it("should return false when the payload is an instance of String", () =>
    {
        expect(isString(new String())).to.be.false;
    });
});
