import { expect } from "chai";

import { isNaN } from "#src/index";

describe(nameof(isNaN), () =>
{
    it("should return true when the payload is Number.NaN", () =>
    {
        expect(isNaN(Number.NaN)).to.be.true;
    });
    
    it("should return false when the payload is Number.MIN_VALUE", () =>
    {
        expect(isNaN(Number.MIN_VALUE)).to.be.false;
    });
    
    it("should return false when the payload is Number.MAX_VALUE or -Number.MAX_VALUE", () =>
    {
        expect(isNaN(Number.MAX_VALUE)).to.be.false;
        expect(isNaN(-Number.MAX_VALUE)).to.be.false;
    });
    
    it("should return false when the payload is Number.POSITIVE_INFINITY or Number.NEGATIVE_INFINITY", () =>
    {
        expect(isNaN(Number.POSITIVE_INFINITY)).to.be.false;
        expect(isNaN(Number.NEGATIVE_INFINITY)).to.be.false;
    });

    it("should return false when the payload is an instance of Number", () =>
    {
        expect(isNaN(new Number())).to.be.false;
    });

    it("should return false when the payload is a primitive (except for number)", () =>
    {
        expect(isNaN(undefined)).to.be.false;
        expect(isNaN(null)).to.be.false;
        expect(isNaN(false)).to.be.false;
        expect(isNaN("")).to.be.false;
        expect(isNaN(Symbol())).to.be.false;
        expect(isNaN(0n)).to.be.false;
    });

    it("should return false when the payload is an object", () =>
    {
        expect(isNaN({})).to.be.false;
    });
});
