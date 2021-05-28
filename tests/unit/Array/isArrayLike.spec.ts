import { expect } from "chai";

import { isArrayLike } from "#src/index";

describe(nameof(isArrayLike), () =>
{
    it("should return true when the payload is an instance of Array", () =>
    {
        expect(isArrayLike([])).to.be.true;
    });

    it("should return true when the payload is an instance of a sub-class of Array", () =>
    {
        class MyArray extends Array {}
        expect(isArrayLike(new MyArray(0))).to.be.true;
    });

    it("should return true when the payload is Array.prototype", () =>
    {
        expect(isArrayLike(Array.prototype)).to.be.true;
    });

    it("should return true when the payload is a proxy of an instance of Array", () =>
    {
        expect(isArrayLike(new Proxy([], {}))).to.be.true;
    });

    it("should return true when the payload is an Array-like object", () =>
    {
        expect(isArrayLike({ length: 0 })).to.be.true;
    });

    it("should return true when the payload is a string", () =>
    {
        expect(isArrayLike("")).to.be.true;
    });
});
