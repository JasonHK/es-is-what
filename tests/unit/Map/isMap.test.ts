import isMap from "#src/Map/isMap";

describe(nameof(isMap), () =>
{
    it("should return true when the payload is a Map instance", () =>
    {
        expect(isMap(new Map())).toBeTrue();
        
        {
            class MyMap extends Map {}
            expect(isMap(new MyMap())).toBeTrue();
        }
    });

    it("should return false when the payload is not a Map instance", () =>
    {
        expect(isMap(Map.prototype)).toBeFalse();
        expect(isMap(new Proxy(new Map(), {}))).toBeFalse();

        expect(isMap(new Set())).toBeFalse();
        expect(isMap(new WeakMap())).toBeFalse();
        expect(isMap(new WeakSet())).toBeFalse();

        expect(isMap({})).toBeFalse();
    })
});
