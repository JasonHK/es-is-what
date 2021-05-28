import { expect } from "chai";

import { isNumberObject } from "#src/index";

describe(nameof(isNumberObject), () =>
{
    it("should return true when the payload is an instance of Number", () =>
    {
        expect(isNumberObject(Object(0))).to.be.true;
        expect(isNumberObject(new Number())).to.be.true;
    });

    it("should return true when the payload is an instance of a sub-class of Number", () =>
    {
        class MyNumber extends Number {}
        expect(isNumberObject(new MyNumber())).to.be.true;
    });

    it("should return true when the payload is Number.prototype", () =>
    {
        expect(isNumberObject(Number.prototype)).to.be.true;
    });

    it("should return false when the payload is a proxy", () =>
    {
        expect(isNumberObject(new Proxy(new Number(), {}))).to.be.false;
    });

    it("should return false when the payload is an object whose does not have the [[NumberData]] internal slot", () =>
    {
        expect(isNumberObject({})).to.be.false;
    });

    it("should return false when the payload is a number", () =>
    {
        expect(isNumberObject(0)).to.be.false;

        expect(isNumberObject(Number.MIN_VALUE)).to.be.false;

        expect(isNumberObject(Number.MAX_VALUE)).to.be.false;
        expect(isNumberObject(-Number.MAX_VALUE)).to.be.false;

        expect(isNumberObject(Number.POSITIVE_INFINITY)).to.be.false;
        expect(isNumberObject(Number.NEGATIVE_INFINITY)).to.be.false;

        expect(isNumberObject(Number.NaN)).to.be.false;
    });

    it("should return false when the payload is a primitive (except for number)", () =>
    {
        expect(isNumberObject(undefined)).to.be.false;
        expect(isNumberObject(null)).to.be.false;
        expect(isNumberObject(false)).to.be.false;
        expect(isNumberObject("")).to.be.false;
        expect(isNumberObject(Symbol())).to.be.false;
        expect(isNumberObject(0n)).to.be.false;
    });
});
