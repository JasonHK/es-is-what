import isPromise from "#src/Promise/isPromise";

describe(nameof(isPromise), () =>
{
    it("should return true when the payload is an instance of Promise", () =>
    {
        expect(isPromise(new Promise(() => {}))).toBeTrue();
    });

    it("should return true when the payload is an instance of a subclass of Promise", () =>
    {
        class MyPromise<T> extends Promise<T> {}
        expect(isPromise(new MyPromise(() => {}))).toBeTrue();
    });

    it("should return false when the payload is Promise.prototype", () =>
    {
        expect(isPromise(Promise.prototype)).toBeFalse();
    });

    it("should return false when the payload is a Promise-like object", () =>
    {
        expect(isPromise({ then: () => {} })).toBeFalse();
    });

    it("should return false when the payload is a proxy of an instance of Promise", () =>
    {
        expect(isPromise(new Proxy(new Promise(() => {}), {}))).toBeFalse();
    });

    it("should return false when the payload is a proxy of a Promise-like object", () =>
    {
        expect(isPromise(new Proxy({ then: () => {} }, {}))).toBeFalse();
    });
});
