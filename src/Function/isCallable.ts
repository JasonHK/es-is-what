import GetIntrinsic from "get-intrinsic";

import type Callable from "./Callable";

import createBadArguments from "./_helpers/createBadArguments";
import type * as $Reflect from "./_helpers/$Reflect";

const MARKER = {};
const BAD_ARGUMENTS = createBadArguments(MARKER);

const $apply: $Reflect.$apply = GetIntrinsic("%Reflect.apply%") as $Reflect.$apply;

export default function isCallable(payload: unknown): payload is Callable
{
    try { $apply(payload, undefined, BAD_ARGUMENTS); } catch (error) { return (error === MARKER); }
}
