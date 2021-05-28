import { expect } from "chai";

import { isStringObject } from "#src/index";

describe(nameof(isStringObject), () =>
{
    it("should return true when the payload is an instance of String", () =>
    {
        expect(isStringObject(new String())).to.be.true;
    });

    it("should return true when the payload is an instance of a sub-class of String", () =>
    {
        class MyString extends String {}
        expect(isStringObject(new MyString())).to.be.true;
    });

    it("should return true when the payload is String.prototype", () =>
    {
        expect(isStringObject(String.prototype)).to.be.true;
    });

    it("should return false when the payload is a proxy", () =>
    {
        expect(isStringObject(new Proxy(new String(), {}))).to.be.false;
    });

    it("should return false when the payload is a string", () =>
    {
        expect(isStringObject("")).to.be.false;
        expect(isStringObject("Hello, world!")).to.be.false;
    });
});
