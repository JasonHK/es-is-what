import callBound from "call-bind/callBound";

const MARKER: object = Object.create(null);

const $has = callBound("%Set.prototype.has%");

export default function isSet<T extends Set<unknown> = Set<unknown>>(payload: unknown): payload is T
{
    try { $has(payload, MARKER); } catch { return false; }
    return true;
}
