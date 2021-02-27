import isPromiseLike from "#src/Promise/isPromiseLike";

describe(nameof(isPromiseLike), () =>
{
    it("should return true when the payload is a Promise-like object", () =>
    {
        expect(isPromiseLike(Promise.resolve())).toBeTrue();
        expect(isPromiseLike(Promise.reject())).toBeTrue();
        expect(isPromiseLike(new Promise(() => {}))).toBeTrue();

        expect(isPromiseLike(Promise.prototype)).toBeTrue();
        expect(isPromiseLike(new Proxy(new Promise(() => {}), {}))).toBeTrue();

        expect(isPromiseLike({ then: () => {} })).toBeTrue();
    });

    it("should return false when the payload is not a Promise-like object", () =>
    {
        expect(isPromiseLike({})).toBeFalse();
    });
});
