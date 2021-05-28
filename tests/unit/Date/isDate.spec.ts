import { expect } from "chai";

import { isDate } from "#src/index";

describe(nameof(isDate), () =>
{
    it("should return true when the payload is an instance of Date", () =>
    {
        expect(isDate(new Date())).to.be.true;
    });

    it("should return true when the payload is an instance of a sub-class of Date", () =>
    {
        class MyDate extends Date {}
        expect(isDate(new MyDate())).to.be.true;
    });

    it("should return false when the payload is Date.prototype", () =>
    {
        expect(isDate(Date.prototype)).to.be.false;
    });

    it("should return false when the payload is a proxy", () =>
    {
        expect(isDate(new Proxy(new Date(), {}))).to.be.false;
    });

    it("should return false when the payload is an object whose does not have the [[DateValue]] internal slot", () =>
    {
        expect(isDate({})).to.be.false;
    });

    it("should return false when the payload is a string", () =>
    {
        // Date string
        expect(isDate(Date())).to.be.false;
    });

    it("should return false when the payload is a number", () =>
    {
        // UNIX epoch
        expect(isDate(Date.now())).to.be.false;
    });
});
