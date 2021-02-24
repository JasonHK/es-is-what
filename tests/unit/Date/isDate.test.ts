import isDate from "#src/Date/isDate";

describe(nameof(isDate), () =>
{
    it("should return true when the payload is a Date instance", () =>
    {
        expect(isDate(new Date())).toBeTrue();
    });

    it("should return false when the payload is not a Date instance", () =>
    {
        expect(isDate(Date())).toBeFalse();
        expect(isDate(Date.now())).toBeFalse();
    });
});
