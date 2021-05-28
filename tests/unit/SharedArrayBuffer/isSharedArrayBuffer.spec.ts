import { expect } from "chai";

import { isSharedArrayBuffer } from "#src/index";

describe(nameof(isSharedArrayBuffer), () =>
{
    before(function ()
    {
        if (typeof SharedArrayBuffer === "undefined")
        {
            this.skip();
        }
    });

    it("should return true when the payload is an instance of SharedArrayBuffer", () =>
    {
        expect(isSharedArrayBuffer(new SharedArrayBuffer(0))).to.be.true;
    });

    it("should return true when the payload is an instance of a sub-class of SharedArrayBuffer", () =>
    {
        class MySharedArrayBuffer extends SharedArrayBuffer {}
        expect(isSharedArrayBuffer(new MySharedArrayBuffer(0))).to.be.true;
    });

    it("should return false when the payload is SharedArrayBuffer.prototype", () =>
    {
        expect(isSharedArrayBuffer(SharedArrayBuffer.prototype)).to.be.false;
    });

    it("should return false when the payload is a proxy", () =>
    {
        expect(isSharedArrayBuffer(new Proxy(new SharedArrayBuffer(0), {}))).to.be.false;
    });

    it("should return false when the payload is an instance of ArrayBuffer", () =>
    {
        expect(isSharedArrayBuffer(new ArrayBuffer(0))).to.be.false;
    });
});
