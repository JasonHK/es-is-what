import { expect } from "chai";

import { isUndefined } from "#src/index";

describe(nameof(isUndefined), () =>
{
    it("should return true when the payload is undefined", () =>
    {
        expect(isUndefined(undefined)).to.be.true;
    });

    it("should return false when the payload is null", () =>
    {
        expect(isUndefined(null)).to.be.false;
    });
});
