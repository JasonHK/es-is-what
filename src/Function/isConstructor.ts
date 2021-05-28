import GetIntrinsic from "get-intrinsic";

import type Constructor from "./Constructor";

import createBadArguments from "./_helpers/createBadArguments";
import type * as $Reflect from "./_helpers/$Reflect";

const MARKER = {};
const BAD_ARGUMENTS = createBadArguments(MARKER);

const $construct: $Reflect.$construct = GetIntrinsic("%Reflect.construct%") as $Reflect.$construct;

export default function isConstructor(payload: unknown): payload is Constructor
{
    try { $construct(payload, BAD_ARGUMENTS); } catch (error) { return (error === MARKER); }
}
