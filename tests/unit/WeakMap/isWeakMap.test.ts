import isWeakMap from "#src/WeakMap/isWeakMap";

describe(nameof(isWeakMap), () =>
{
    it("should return true when the payload is a WeakMap instance", () =>
    {
        expect(isWeakMap(new WeakMap())).toBeTrue();

        {
            class MyWeakMap extends WeakMap {}
            expect(isWeakMap(new MyWeakMap())).toBeTrue();
        }
    });

    it("should return false when the payload is not a WeakMap instance", () =>
    {
        expect(isWeakMap(WeakMap.prototype)).toBeFalse();
        expect(isWeakMap(new Proxy(new WeakMap(), {}))).toBeFalse();

        expect(isWeakMap(new Map())).toBeFalse();
        expect(isWeakMap(new Set())).toBeFalse();
        expect(isWeakMap(new WeakSet())).toBeFalse();

        expect(isWeakMap({})).toBeFalse();
    });
});
