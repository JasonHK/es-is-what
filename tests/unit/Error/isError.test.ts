import isError from "#src/Error/isError";

describe(nameof(isError), () =>
{
    it("should return true when the payload is an Error object", () =>
    {
        expect(isError(new Error())).toBeTrue();

        {
            class MyError extends Error {}
            expect(isError(new MyError())).toBeTrue();
        }

        expect(isError(
            {
                [Symbol.toStringTag]: "Error",
                name: "NotExtendedFromErrorButWorks",
                message: "",
            }))
            .toBeTrue();
    });

    it("should return false when the payload is not an Error object", () =>
    {
        expect(isError(Error.prototype)).toBeFalse();

        {
            class ExtendedFromErrorButNotWorks extends Error
            {
                get [Symbol.toStringTag]() { return "ExtendedFromErrorButNotWorks"; }
            }

            expect(isError(new ExtendedFromErrorButNotWorks())).toBeFalse();
        }

        expect(isError(
            {
                name: "NotExtendedFromErrorAndAlsoNotWorks",
                message: "",
            }))
            .toBeFalse();

        expect(isError({})).toBeFalse();

        expect(isError("Error")).toBeFalse();
    });
});
