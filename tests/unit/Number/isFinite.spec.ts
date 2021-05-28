import { expect } from "chai";

import { isFinite } from "#src/index";

describe(nameof(isFinite), () =>
{
    it("should return true when the payload is 0", () =>
    {
        expect(isFinite(0)).to.be.true;
    });
    
    it("should return true when the payload is Number.MIN_VALUE", () =>
    {
        expect(isFinite(Number.MIN_VALUE)).to.be.true;
    });
    
    it("should return true when the payload is Number.MAX_VALUE or -Number.MAX_VALUE", () =>
    {
        expect(isFinite(Number.MAX_VALUE)).to.be.true;
        expect(isFinite(-Number.MAX_VALUE)).to.be.true;
    });
    
    it("should return false when the payload is Number.POSITIVE_INFINITY or Number.NEGATIVE_INFINITY", () =>
    {
        expect(isFinite(Number.POSITIVE_INFINITY)).to.be.false;
        expect(isFinite(Number.NEGATIVE_INFINITY)).to.be.false;
    });
    
    it("should return false when the payload is Number.NaN", () =>
    {
        expect(isFinite(Number.NaN)).to.be.false;
    });

    it("should return false when the payload is an instance of Number", () =>
    {
        expect(isFinite(new Number())).to.be.false;
    });

    it("should return false when the payload is a primitive (except for number)", () =>
    {
        expect(isFinite(undefined)).to.be.false;
        expect(isFinite(null)).to.be.false;
        expect(isFinite(false)).to.be.false;
        expect(isFinite("")).to.be.false;
        expect(isFinite(Symbol())).to.be.false;
        expect(isFinite(0n)).to.be.false;
    });

    it("should return false when the payload is an object", () =>
    {
        expect(isFinite({})).to.be.false;
    });
});
