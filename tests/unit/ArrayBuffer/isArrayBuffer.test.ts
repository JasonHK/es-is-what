import isArrayBuffer from "#src/ArrayBuffer/isArrayBuffer";

describe(nameof(isArrayBuffer), () =>
{
    it("should return true when the payload is an ArrayBuffer instance", () =>
    {
        expect(isArrayBuffer(new ArrayBuffer(0))).toBeTrue();

        {
            class MyArrayBuffer extends ArrayBuffer {}
            expect(isArrayBuffer(new MyArrayBuffer(0))).toBeTrue();
        }
    });

    it("should return false when the payload is not an ArrayBuffer instance", () =>
    {
        expect(isArrayBuffer(ArrayBuffer.prototype)).toBeFalse();
        expect(isArrayBuffer(new Proxy(new ArrayBuffer(0), {}))).toBeFalse();

        expect(isArrayBuffer(new SharedArrayBuffer(0))).toBeFalse();

        expect(isArrayBuffer({})).toBeFalse();
    });
});
