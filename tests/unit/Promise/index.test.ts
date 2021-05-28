import * as Exported from "#src/Promise";

import { EXPORTED_MEMBERS } from "./";

it("should export the specified members", () =>
{
    expect(Exported).toContainAllKeys(EXPORTED_MEMBERS);
});
