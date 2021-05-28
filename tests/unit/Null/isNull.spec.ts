import { expect } from "chai";

import { isNull } from "#src/index";

describe(nameof(isNull), () =>
{
    it("should return true when the payload is null", () =>
    {
        expect(isNull(null)).to.be.true;
    });

    it("should return false when the payload is undefined", () =>
    {
        expect(isNull(undefined)).to.be.false;
    });
});
