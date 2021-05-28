import { expect } from "chai";

import { isCallable } from "#src/index";

describe(nameof(isCallable), () =>
{
    it("should return true when the payload is a function", () =>
    {
        // Declaration
        function callable() {}
        expect(isCallable(callable)).to.be.true;

        // Named Expression
        expect(isCallable(function callable() {})).to.be.true;

        // Anonymous Expression
        expect(isCallable(function () {})).to.be.true;
    });

    it("should return true when the payload is an arrow function", () =>
    {
        expect(isCallable(() => {})).to.be.true;
    });

    it("should return true when the payload is an async function", () =>
    {
        // Declaration
        async function callable() {}
        expect(isCallable(callable)).to.be.true;

        // Named Expression
        expect(isCallable(async function callable() {})).to.be.true;

        // Anonymous Expression
        expect(isCallable(async function () {})).to.be.true;
    });

    it("should return true when the payload is an async arrow function", () =>
    {
        expect(isCallable(async () => {})).to.be.true;
    });

    it("should return true when the payload is a generator function", () =>
    {
        // Declaration
        function* callable() {}
        expect(isCallable(callable)).to.be.true;

        // Named Expression
        expect(isCallable(function* callable() {})).to.be.true;

        // Anonymous Expression
        expect(isCallable(function* () {})).to.be.true;
    });

    it("should return true when the payload is an async generator function", () =>
    {
        // Declaration
        async function* callable() {}
        expect(isCallable(callable)).to.be.true;

        // Named Expression
        expect(isCallable(async function* callable() {})).to.be.true;

        // Anonymous Expression
        expect(isCallable(async function* () {})).to.be.true;
    });

    it("should return true when the payload is a class constructor", () =>
    {
        class MyClass {}
        expect(isCallable(MyClass)).to.be.true;
    });

    it("should return true when the payload is an instance of Function", () =>
    {
        expect(isCallable(Function())).to.be.true;
    });

    it("should return true when the payload is an instance of a sub-class of Function", () =>
    {
        class MyFunction extends Function {}
        expect(isCallable(new MyFunction())).to.be.true;
    });

    it("should return true when the payload is Function", () =>
    {
        expect(isCallable(Function)).to.be.true;
    });

    it("should return true when the payload is Function.prototype", () =>
    {
        expect(isCallable(Function.prototype)).to.be.true;
    });

    it("should return true when the payload is a proxy of an instance of Function", () =>
    {
        expect(isCallable(new Proxy(Function(), {}))).to.be.true;
    });

    it("should return true when the payload is an instance of HTMLAllCollection", function ()
    {
        if ((typeof HTMLAllCollection === "undefined") || (typeof document === "undefined"))
        {
            this.skip();
        }

        expect(isCallable(document.all)).to.be.true;
    });

    it("should return false when the payload is an object whose does not have the [[Call]] internal method", () =>
    {
        expect(isCallable({})).to.be.false;
    });

    it("should return false when the payload is a primitive", () =>
    {
        expect(isCallable(undefined)).to.be.false;
        expect(isCallable(null)).to.be.false;
        expect(isCallable(false)).to.be.false;
        expect(isCallable("")).to.be.false;
        expect(isCallable(Symbol())).to.be.false;
        expect(isCallable(0)).to.be.false;
        expect(isCallable(0n)).to.be.false;
    });
});
