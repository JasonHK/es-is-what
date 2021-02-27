import isDataView from "#src/DataView/isDataView";

describe(nameof(isDataView), () =>
{
    it("should return true when the payload is a DataView instance", () =>
    {
        expect(isDataView(new DataView(new ArrayBuffer(0)))).toBeTrue();

        {
            class MyDataView extends DataView {}
            expect(isDataView(new MyDataView(new ArrayBuffer(0)))).toBeTrue();
        }
    });

    it("should return false when the payload is not a DataView instance", () =>
    {
        expect(isDataView(DataView.prototype)).toBeFalse();
        expect(isDataView(new Proxy(new DataView(new ArrayBuffer(0)), {}))).toBeFalse();

        expect(isDataView({})).toBeFalse();
    });
});
