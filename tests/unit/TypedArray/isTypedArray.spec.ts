import { expect } from "chai";

import { isTypedArray } from "#src/index";

describe(nameof(isTypedArray), () =>
{
    it("should return true when the payload is an instance of Int8Array", () =>
    {
        expect(isTypedArray(new Int8Array())).to.be.true;
    });

    it("should return true when the payload is an instance of Uint8Array", () =>
    {
        expect(isTypedArray(new Uint8Array())).to.be.true;
    });

    it("should return true when the payload is an instance of Uint8ClampedArray", () =>
    {
        expect(isTypedArray(new Uint8ClampedArray())).to.be.true;
    });

    it("should return true when the payload is an instance of Int16Array", () =>
    {
        expect(isTypedArray(new Int16Array())).to.be.true;
    });

    it("should return true when the payload is an instance of Uint16Array", () =>
    {
        expect(isTypedArray(new Uint16Array())).to.be.true;
    });

    it("should return true when the payload is an instance of Int32Array", () =>
    {
        expect(isTypedArray(new Int32Array())).to.be.true;
    });

    it("should return true when the payload is an instance of Uint32Array", () =>
    {
        expect(isTypedArray(new Uint32Array())).to.be.true;
    });

    it("should return true when the payload is an instance of Float32Array", () =>
    {
        expect(isTypedArray(new Float32Array())).to.be.true;
    });

    it("should return true when the payload is an instance of BigInt64Array", () =>
    {
        expect(isTypedArray(new BigInt64Array())).to.be.true;
    });

    it("should return true when the payload is an instance of BigUint64Array", () =>
    {
        expect(isTypedArray(new BigUint64Array())).to.be.true;
    });

    it("should return true when the payload is an instance of Float64Array", () =>
    {
        expect(isTypedArray(new Float64Array())).to.be.true;
    });

    it("should return false when the payload is an object whose not extended from %TypedArray%", () =>
    {
        expect(isTypedArray({})).to.be.false;
    });
});
