import { expect } from "chai";

import { isError } from "#src/index";

describe(nameof(isError), () =>
{
    it("should return true when the payload is an instance of Error", () =>
    {
        expect(isError(new Error())).to.be.true;
    });

    it("should return true when the payload is an instance of a sub-class of Error, which inherited the [@@toStringTag] property from", () =>
    {
        class MyError extends Error {}
        expect(isError(new MyError())).to.be.true;
    });

    it("should return true when the payload is an Error-like object, whose with a valid [@@toStringTag] property", () =>
    {
        const error = {
            [Symbol.toStringTag]: "Error",
            name: "FakeError",
            message: "This is not a real error.",
        };

        expect(isError(error)).to.be.true;
    });

    it("should return false when the payload is an instance of a sub-class of Error, which overridden the [@@toStringTag] property with an invalid value", () =>
    {
        class MyError extends Error
        {
            readonly [Symbol.toStringTag] = "MyError";
        }

        expect(isError(new MyError())).to.be.false;
    });

    it("should return false when the payload is Error.prototype", () =>
    {
        expect(isError(Error.prototype)).to.be.false;
    });

    it("should return false when the payload is an Error-like object, whose with an invalid [@@toStringTag] property", () =>
    {
        const error = {
            [Symbol.toStringTag]: "FakeError",
            name: "FakeError",
            message: "This is not a real error.",
        };

        expect(isError(error)).to.be.false;
    });

    it("should return false when the payload is an Error-like object, whose without the [@@toStringTag] property", () =>
    {
        const error = {
            name: "FakeError",
            message: "This is not a real error.",
        };

        expect(isError(error)).to.be.false;
    });

    it("should return false when the payload is an object whose not Error-like", () =>
    {
        expect(isError({})).to.be.false;
    });
});
