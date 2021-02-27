import isWeakSet from "#src/WeakSet/isWeakSet";

describe(nameof(isWeakSet), () =>
{
    it("should return true when the payload is a WeakSet instance", () =>
    {
        expect(isWeakSet(new WeakSet())).toBeTrue();

        {
            class MyWeakSet extends WeakSet {}
            expect(isWeakSet(new MyWeakSet())).toBeTrue();
        }
    });

    it("should return false when the payload is not a WeakSet instance", () =>
    {
        expect(isWeakSet(WeakSet.prototype)).toBeFalse();
        expect(isWeakSet(new Proxy(new WeakSet(), {}))).toBeFalse();

        expect(isWeakSet(new Map())).toBeFalse();
        expect(isWeakSet(new Set())).toBeFalse();
        expect(isWeakSet(new WeakMap())).toBeFalse();

        expect(isWeakSet({})).toBeFalse();
    });
});
