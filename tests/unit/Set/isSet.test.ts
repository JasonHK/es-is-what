import isSet from "#src/Set/isSet";

describe(nameof(isSet), () =>
{
    it("should return true when the payload is a Set instance", () =>
    {
        expect(isSet(new Set())).toBeTrue();

        {
            class MySet extends Set {}
            expect(isSet(new MySet())).toBeTrue();
        }
    });

    it("should return false when the payload is not a Set instance", () =>
    {
        expect(isSet(Set.prototype)).toBeFalse();
        expect(isSet(new Proxy(new Set(), {}))).toBeFalse();

        expect(isSet(new Map())).toBeFalse();
        expect(isSet(new WeakMap())).toBeFalse();
        expect(isSet(new WeakSet())).toBeFalse();

        expect(isSet({})).toBeFalse();
    });
});
