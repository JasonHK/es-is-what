import isPromiseLike from "#src/Promise/isPromiseLike";

describe(nameof(isPromiseLike), () =>
{
    it("should return true when the payload is an instance of Promise", () =>
    {
        expect(isPromiseLike(new Promise(() => {}))).toBeTrue();
    });

    it("should return true when the payload is an instance of a subclass of Promise", () =>
    {
        class MyPromise<T> extends Promise<T> {}
        expect(isPromiseLike(new MyPromise(() => {}))).toBeTrue();
    });

    it("should return true when the payload is a Promise-like object", () =>
    {
        expect(isPromiseLike({ then: () => {} })).toBeTrue();
    });

    it("should return true when the payload is Promise.prototype", () =>
    {
        expect(isPromiseLike(Promise.prototype)).toBeTrue();
    });

    it("should return true when the payload is a proxy of an instance of Promise", () =>
    {
        expect(isPromiseLike(new Proxy(new Promise(() => {}), {}))).toBeTrue();
    });

    it("should return true when the payload is a proxy of a Promise-like object", () =>
    {
        expect(isPromiseLike(new Proxy({ then: () => {} }, {}))).toBeTrue();
    });
});
