import { expect } from "chai";

import { isErrorLike } from "#src/index";

describe(nameof(isErrorLike), () =>
{
    it("should return true when the payload is an instance of Error", () =>
    {
        expect(isErrorLike(new Error())).to.be.true;
    });

    it("should return true when the payload is an instance of a sub-class of Error", () =>
    {
        class MyError extends Error {}
        expect(isErrorLike(new MyError())).to.be.true;
    });

    it("should return true when the payload is Error.prototype", () =>
    {
        expect(isErrorLike(Error.prototype)).to.be.true;
    });

    it("should return true when the payload is an Error-like object", () =>
    {
        const error = {
            name: "FakeError",
            message: "This is not a real error.",
        };

        expect(isErrorLike(error)).to.be.true;
    });

    it("should return false when the payload is an object whose not Error-like", () =>
    {
        expect(isErrorLike({})).to.be.false;
    });
});
