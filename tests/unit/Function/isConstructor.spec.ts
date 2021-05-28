import { expect } from "chai";

import { isConstructor } from "#src/index";

describe(nameof(isConstructor), () =>
{
    it("should return true when the payload is a function", () =>
    {
        // Declaration
        function callable() {}
        expect(isConstructor(callable)).to.be.true;

        // Named Expression
        expect(isConstructor(function callable() {})).to.be.true;

        // Anonymous Expression
        expect(isConstructor(function () {})).to.be.true;
    });

    it("should return true when the payload is a class constructor", () =>
    {
        class MyClass {}
        expect(isConstructor(MyClass)).to.be.true;
    });

    it("should return true when the payload is an instance of Function", () =>
    {
        expect(isConstructor(Function())).to.be.true;
    });

    it("should return true when the payload is an instance of a sub-class of Function", () =>
    {
        class MyFunction extends Function {}
        expect(isConstructor(new MyFunction())).to.be.true;
    });

    it("should return true when the payload is Function", () =>
    {
        expect(isConstructor(Function)).to.be.true;
    });

    it("should return true when the payload is a proxy of an instance of Function", () =>
    {
        expect(isConstructor(new Proxy(Function(), {}))).to.be.true;
    });

    it("should return false when the payload is an arrow function", () =>
    {
        expect(isConstructor(() => {})).to.be.false;
    });

    it("should return false when the payload is an async function", () =>
    {
        // Declaration
        async function callable() {}
        expect(isConstructor(callable)).to.be.false;

        // Named Expression
        expect(isConstructor(async function callable() {})).to.be.false;

        // Anonymous Expression
        expect(isConstructor(async function () {})).to.be.false;
    });

    it("should return false when the payload is an async arrow function", () =>
    {
        expect(isConstructor(async () => {})).to.be.false;
    });

    it("should return false when the payload is a generator function", () =>
    {
        // Declaration
        function* callable() {}
        expect(isConstructor(callable)).to.be.false;

        // Named Expression
        expect(isConstructor(function* callable() {})).to.be.false;

        // Anonymous Expression
        expect(isConstructor(function* () {})).to.be.false;
    });

    it("should return false when the payload is an async generator function", () =>
    {
        // Declaration
        async function* callable() {}
        expect(isConstructor(callable)).to.be.false;

        // Named Expression
        expect(isConstructor(async function* callable() {})).to.be.false;

        // Anonymous Expression
        expect(isConstructor(async function* () {})).to.be.false;
    });

    it("should return false when the payload is Function.prototype", () =>
    {
        expect(isConstructor(Function.prototype)).to.be.false;
    });

    it("should return false when the payload is an instance of HTMLAllCollection", function ()
    {
        if ((typeof HTMLAllCollection === "undefined") || (typeof document === "undefined"))
        {
            this.skip();
        }

        expect(isConstructor(document.all)).to.be.false;
    });

    it("should return false when the payload is an object whose does not have the [[Construct]] internal method", () =>
    {
        expect(isConstructor({})).to.be.false;
    });

    it("should return false when the payload is a primitive", () =>
    {
        expect(isConstructor(undefined)).to.be.false;
        expect(isConstructor(null)).to.be.false;
        expect(isConstructor(false)).to.be.false;
        expect(isConstructor("")).to.be.false;
        expect(isConstructor(Symbol())).to.be.false;
        expect(isConstructor(0)).to.be.false;
        expect(isConstructor(0n)).to.be.false;
    });
});
