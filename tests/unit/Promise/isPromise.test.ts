import isPromise from "#src/Promise/isPromise";

describe(nameof(isPromise), () =>
{
    it("should return true when the payload is a Promise instance", () =>
    {
        expect(isPromise(Promise.resolve())).toBeTrue();
        expect(isPromise(Promise.reject())).toBeTrue();
        expect(isPromise(new Promise(() => {}))).toBeTrue();
    });

    it("should return false when the payload is not a Promise instance", () =>
    {
        expect(isPromise(Promise.prototype)).toBeFalse();
        expect(isPromise(new Proxy(new Promise(() => {}), {}))).toBeFalse();

        expect(isPromise({ then: () => {} })).toBeFalse();

        expect(isPromise({})).toBeFalse();
    });
});
