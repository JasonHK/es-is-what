import { expect } from "chai";

import { isNullLike } from "#src/index";

describe(nameof(isNullLike), () =>
{
    it("should return true when the payload is null", () =>
    {
        expect(isNullLike(null)).to.be.true;
    });

    it("should return true when the payload is undefined", () =>
    {
        expect(isNullLike(undefined)).to.be.true;
    });
});
