import noopFalse from "#src/_helpers/noopFalse";

describe(nameof(noopFalse), () =>
{
    it("should return false", () =>
    {
        expect(noopFalse()).toBeFalse();
    });
});
