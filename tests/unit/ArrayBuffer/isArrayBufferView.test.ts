import isArrayBufferView from "#src/ArrayBuffer/isArrayBufferView";

describe(nameof(isArrayBufferView), () =>
{
    it("should return true when the payload is an ArrayBufferView object", () =>
    {
        expect(isArrayBufferView(new DataView(new ArrayBuffer(0)))).toBeTrue();

        expect(isArrayBufferView(new Int8Array())).toBeTrue();
        expect(isArrayBufferView(new Uint8Array())).toBeTrue();
        expect(isArrayBufferView(new Uint8ClampedArray())).toBeTrue();
        expect(isArrayBufferView(new Int16Array())).toBeTrue();
        expect(isArrayBufferView(new Uint16Array())).toBeTrue();
        expect(isArrayBufferView(new Int32Array())).toBeTrue();
        expect(isArrayBufferView(new Uint32Array())).toBeTrue();
        expect(isArrayBufferView(new Float32Array())).toBeTrue();
        expect(isArrayBufferView(new BigInt64Array())).toBeTrue();
        expect(isArrayBufferView(new BigUint64Array())).toBeTrue();
        expect(isArrayBufferView(new Float64Array())).toBeTrue();
    });

    it("should return false when the payload is not an ArrayBufferView object", () =>
    {
        expect(isArrayBufferView({})).toBeFalse();
    });
});
