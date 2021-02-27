import isEmpty from "#src/_utilities/isEmpty";

describe(nameof(isEmpty), () =>
{
    describe("returns true", () =>
    {
        test("when the payload is an empty string", () =>
        {
            expect(isEmpty("")).toBeTrue();
        });

        test("when the payload is an empty String instance", () =>
        {
            expect(isEmpty(new String(""))).toBeTrue();
        });

        test("when the payload is an empty Array instance", () =>
        {
            expect(isEmpty([])).toBeTrue();
        });

        test("when the payload is an empty Array-like object", () =>
        {
            expect(isEmpty({ length: 0 })).toBeTrue();
        });

        test("when the payload is an empty Map instance", () =>
        {
            expect(isEmpty(new Map())).toBeTrue();
        });

        test("when the payload is an empty Set instance", () =>
        {
            expect(isEmpty(new Set())).toBeTrue();
        });

        test("when the payload is an empty ArrayBuffer instance", () =>
        {
            expect(isEmpty(new ArrayBuffer(0))).toBeTrue();
        });

        test("when the payload is an empty SharedArrayBuffer instance", () =>
        {
            expect(isEmpty(new SharedArrayBuffer(0))).toBeTrue();
        });

        test("when the payload is an empty DataView instance", () =>
        {
            expect(isEmpty(new DataView(new ArrayBuffer(0)))).toBeTrue();
        });

        test("when the payload is an empty Iterable value", () =>
        {
            const iterable = {
                [Symbol.iterator]()
                {
                    return {
                        next()
                        {
                            return {
                                value: undefined,
                                done: true,
                            };
                        },
                    };
                },
            };

            expect(isEmpty(iterable)).toBeTrue();
        });
    });
});
