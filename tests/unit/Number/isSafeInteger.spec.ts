import { expect } from "chai";

import { isSafeInteger } from "#src/index";

describe(nameof(isSafeInteger), () =>
{
    it("should return true when the payload is 0", () =>
    {
        expect(isSafeInteger(0)).to.be.true;
    });
    
    it("should return true when the payload is Number.MIN_SAFE_INTEGER or Number.MAX_SAFE_INTEGER", () =>
    {
        expect(isSafeInteger(Number.MIN_SAFE_INTEGER)).to.be.true;
        expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).to.be.true;
    });
    
    it("should return false when the payload is (Number.MIN_SAFE_INTEGER - 1) or (Number.MAX_SAFE_INTEGER + 1)", () =>
    {
        expect(isSafeInteger(Number.MIN_SAFE_INTEGER - 1)).to.be.false;
        expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).to.be.false;
    });
    
    it("should return false when the payload is Number.POSITIVE_INFINITY or Number.NEGATIVE_INFINITY", () =>
    {
        expect(isSafeInteger(Number.POSITIVE_INFINITY)).to.be.false;
        expect(isSafeInteger(Number.NEGATIVE_INFINITY)).to.be.false;
    });
    
    it("should return false when the payload is Number.NaN", () =>
    {
        expect(isSafeInteger(Number.NaN)).to.be.false;
    });

    it("should return false when the payload is an instance of Number", () =>
    {
        expect(isSafeInteger(new Number())).to.be.false;
    });

    it("should return false when the payload is a primitive (except for number)", () =>
    {
        expect(isSafeInteger(undefined)).to.be.false;
        expect(isSafeInteger(null)).to.be.false;
        expect(isSafeInteger(false)).to.be.false;
        expect(isSafeInteger("")).to.be.false;
        expect(isSafeInteger(Symbol())).to.be.false;
        expect(isSafeInteger(0n)).to.be.false;
    });

    it("should return false when the payload is an object", () =>
    {
        expect(isSafeInteger({})).to.be.false;
    });
});
