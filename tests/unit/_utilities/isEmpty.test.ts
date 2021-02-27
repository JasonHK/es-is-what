import isEmpty from "#src/_utilities/isEmpty";

describe(nameof(isEmpty), () =>
{
    describe("returns true", () =>
    {
        test("when the payload is an empty string", () =>
        {
            expect(isEmpty("")).toBeTrue();
        });

        test("when the payload is an empty Array", () =>
        {
            expect(isEmpty([])).toBeTrue();
        });
    });
});
