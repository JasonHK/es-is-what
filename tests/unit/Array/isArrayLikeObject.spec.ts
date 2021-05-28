import { expect } from "chai";

import { isArrayLikeObject } from "#src/index";

describe(nameof(isArrayLikeObject), () =>
{
    it("should return true when the payload is an instance of Array", () =>
    {
        expect(isArrayLikeObject([])).to.be.true;
    });

    it("should return true when the payload is an instance of a sub-class of Array", () =>
    {
        class MyArray extends Array {}
        expect(isArrayLikeObject(new MyArray(0))).to.be.true;
    });

    it("should return true when the payload is Array.prototype", () =>
    {
        expect(isArrayLikeObject(Array.prototype)).to.be.true;
    });

    it("should return true when the payload is a proxy of an instance of Array", () =>
    {
        expect(isArrayLikeObject(new Proxy([], {}))).to.be.true;
    });

    it("should return true when the payload is an Array-like object", () =>
    {
        expect(isArrayLikeObject({ length: 0 })).to.be.true;
    });

    it("should return false when the payload is a string", () =>
    {
        expect(isArrayLikeObject("")).to.be.false;
    });
});

