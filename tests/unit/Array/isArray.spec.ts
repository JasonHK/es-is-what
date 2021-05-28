import { expect } from "chai";

import { isArray } from "#src/index";

describe(nameof(isArray), () =>
{
    context("returns true", () =>
    {
        specify("when the payload is an instance of Array", () =>
        {
            expect(isArray([])).to.be.true;
        });
    
        specify("when the payload is an instance of a sub-class of Array", () =>
        {
            class MyArray extends Array {}
            expect(isArray(new MyArray(0))).to.be.true;
        });
    
        specify("when the payload is Array.prototype", () =>
        {
            expect(isArray(Array.prototype)).to.be.true;
        });
    
        specify("when the payload is a proxy of an instance of Array", () =>
        {
            expect(isArray(new Proxy([], {}))).to.be.true;
        });
    });

    context("returns false", () =>
    {
        specify("when the payload is an Array-like object", () =>
        {
            expect(isArray({ length: 0 })).to.be.false;
        });
    
        specify("when the payload is a string", () =>
        {
            expect(isArray("")).to.be.false;
        });
    });
});
