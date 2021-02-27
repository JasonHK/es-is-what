import isErrorLike from "#src/Error/isErrorLike";

describe(nameof(isErrorLike), () =>
{
    it("should return true when the payload is an Error-like object", () =>
    {
        expect(isErrorLike(new Error())).toBeTrue();

        {
            class MyError extends Error {}
            expect(isErrorLike(new MyError())).toBeTrue();
        }

        expect(isErrorLike(
            {
                [Symbol.toStringTag]: "Error",
                name: "NotExtendedFromErrorButWorks",
                message: "",
            }))
            .toBeTrue();
        
        expect(isErrorLike(Error.prototype)).toBeTrue();

        {
            class ExtendedFromErrorButNotWorks extends Error
            {
                get [Symbol.toStringTag]() { return "ExtendedFromErrorButNotWorks"; }
            }

            expect(isErrorLike(new ExtendedFromErrorButNotWorks())).toBeTrue();
        }

        expect(isErrorLike(
            {
                name: "NotExtendedFromErrorAndAlsoNotWorks",
                message: "",
            }))
            .toBeTrue();
    });

    it("should return false when the payload is not an Error-like object", () =>
    {
        expect(isErrorLike({})).toBeFalse();

        expect(isErrorLike("Error")).toBeFalse();
    });
});
