import { expect } from "chai";

import { isInteger } from "#src/index";

describe(nameof(isInteger), () =>
{
    it("should return true when the payload is 0", () =>
    {
        expect(isInteger(0)).to.be.true;
    });
    
    it("should return true when the payload is Number.MAX_VALUE or -Number.MAX_VALUE", () =>
    {
        expect(isInteger(Number.MAX_VALUE)).to.be.true;
        expect(isInteger(-Number.MAX_VALUE)).to.be.true;
    });
    
    it("should return false when the payload is Number.MIN_VALUE", () =>
    {
        expect(isInteger(Number.MIN_VALUE)).to.be.false;
    });
    
    it("should return false when the payload is Number.POSITIVE_INFINITY or Number.NEGATIVE_INFINITY", () =>
    {
        expect(isInteger(Number.POSITIVE_INFINITY)).to.be.false;
        expect(isInteger(Number.NEGATIVE_INFINITY)).to.be.false;
    });
    
    it("should return false when the payload is Number.NaN", () =>
    {
        expect(isInteger(Number.NaN)).to.be.false;
    });

    it("should return false when the payload is an instance of Number", () =>
    {
        expect(isInteger(new Number())).to.be.false;
    });

    it("should return false when the payload is a primitive (except for number)", () =>
    {
        expect(isInteger(undefined)).to.be.false;
        expect(isInteger(null)).to.be.false;
        expect(isInteger(false)).to.be.false;
        expect(isInteger("")).to.be.false;
        expect(isInteger(Symbol())).to.be.false;
        expect(isInteger(0n)).to.be.false;
    });

    it("should return false when the payload is an object", () =>
    {
        expect(isInteger({})).to.be.false;
    });
});
