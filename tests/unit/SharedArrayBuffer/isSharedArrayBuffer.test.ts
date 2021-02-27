import isSharedArrayBuffer from "#src/SharedArrayBuffer/isSharedArrayBuffer";

describe(nameof(isSharedArrayBuffer), () =>
{
    it("should return true when the payload is an SharedArrayBuffer instance", () =>
    {
        expect(isSharedArrayBuffer(new SharedArrayBuffer(0))).toBeTrue();

        {
            class MySharedArrayBuffer extends SharedArrayBuffer {}
            expect(isSharedArrayBuffer(new MySharedArrayBuffer(0))).toBeTrue();
        }
    });

    it("should return false when the payload is not an SharedArrayBuffer instance", () =>
    {
        expect(isSharedArrayBuffer(SharedArrayBuffer.prototype)).toBeFalse();
        expect(isSharedArrayBuffer(new Proxy(new SharedArrayBuffer(0), {}))).toBeFalse();

        expect(isSharedArrayBuffer(new ArrayBuffer(0))).toBeFalse();

        expect(isSharedArrayBuffer({})).toBeFalse();
    });
});
