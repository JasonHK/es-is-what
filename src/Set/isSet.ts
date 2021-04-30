import callBound from "call-bind/callBound";

const MARKER = {};

const $has = callBound("%Set.prototype.has%");

export default function isSet(payload: unknown): payload is Set<unknown>
{
    try { $has(payload, MARKER); } catch { return false; }
    return true;
}
