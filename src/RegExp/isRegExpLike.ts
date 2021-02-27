import isObject from "../Object/isObject";

import isRegExp from "./isRegExp";
import type RegExpLike from "./RegExpLike";

export default function isRegExpLike(payload: unknown): payload is RegExpLike
{
    if (isRegExp(payload)) { return true; }
    return (isObject<RegExpLike>(payload) && !!payload[Symbol.match]);
}
