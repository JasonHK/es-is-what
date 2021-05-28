import { expect } from "chai";

import { isNumber } from "#src/index";

describe(nameof(isNumber), () =>
{
    it("should return true when the payload is 0", () =>
    {
        expect(isNumber(0)).to.be.true;
    });
    
    it("should return true when the payload is Number.MIN_VALUE", () =>
    {
        expect(isNumber(Number.MIN_VALUE)).to.be.true;
    });
    
    it("should return true when the payload is Number.MAX_VALUE or -Number.MAX_VALUE", () =>
    {
        expect(isNumber(Number.MAX_VALUE)).to.be.true;
        expect(isNumber(-Number.MAX_VALUE)).to.be.true;
    });
    
    it("should return true when the payload is Number.POSITIVE_INFINITY or Number.NEGATIVE_INFINITY", () =>
    {
        expect(isNumber(Number.POSITIVE_INFINITY)).to.be.true;
        expect(isNumber(Number.NEGATIVE_INFINITY)).to.be.true;
    });
    
    it("should return true when the payload is Number.NaN", () =>
    {
        expect(isNumber(Number.NaN)).to.be.true;
    });

    it("should return false when the payload is an instance of Number", () =>
    {
        expect(isNumber(new Number())).to.be.false;
    });

    it("should return false when the payload is a primitive (except for number)", () =>
    {
        expect(isNumber(undefined)).to.be.false;
        expect(isNumber(null)).to.be.false;
        expect(isNumber(false)).to.be.false;
        expect(isNumber("")).to.be.false;
        expect(isNumber(Symbol())).to.be.false;
        expect(isNumber(0n)).to.be.false;
    });

    it("should return false when the payload is an object", () =>
    {
        expect(isNumber({})).to.be.false;
    });
});
