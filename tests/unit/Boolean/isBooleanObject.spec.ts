import { expect } from "chai";

import { isBooleanObject } from "#src/index";

describe(nameof(isBooleanObject), () =>
{
    it("should return true when the payload is an instance of Boolean", () =>
    {
        expect(isBooleanObject(new Boolean())).to.be.true;
    });

    it("should return true when the payload is an instance of a sub-class of Boolean", () =>
    {
        class MyBoolean extends Boolean {}
        expect(isBooleanObject(new MyBoolean())).to.be.true;
    });

    it("should return true when the payload is Boolean.prototype", () =>
    {
        expect(isBooleanObject(Boolean.prototype)).to.be.true;
    });

    it("should return false when the payload is a proxy", () =>
    {
        expect(isBooleanObject(new Proxy(new Boolean(), {}))).to.be.false;
    });

    it("should return false when the payload is an object whose does not have the [[BooleanData]] internal slot", () =>
    {
        expect(isBooleanObject({})).to.be.false;
    });

    it("should return false when the payload is a boolean", () =>
    {
        expect(isBooleanObject(true)).to.be.false;
        expect(isBooleanObject(false)).to.be.false;
    });
});
