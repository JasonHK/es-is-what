import isArgumentsLike from "#src/Arguments/isArgumentsLike";

describe(nameof(isArgumentsLike), () =>
{
    describe("returns true", () =>
    {
        test("when the payload is an Arguments object", () =>
        {
            const payload = (function() { return arguments; })();
            expect(isArgumentsLike(payload)).toBeTrue();
        });

        test("when the payload is an Arguments-like object", () =>
        {
            const payload = Object.defineProperties(
                {},
                {
                    length: {
                        configurable: true,
                        writable: true,
                        value: 0,
                    },
                    callee: {
                        configurable: true,
                        writable: true,
                        value: () => {},
                    },
                });

            expect(isArgumentsLike(payload)).toBeTrue();
        });
    });

    describe("returns false", () =>
    {
        test("when the payload is not an Arguments-like object", () =>
        {
            expect(isArgumentsLike({})).toBeFalse();
        });
    });
});
