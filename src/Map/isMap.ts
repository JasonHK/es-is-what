import callBound from "call-bind/callBound";

const MARKER: object = Object.create(null);

const $has = callBound("%Map.prototype.has%");

export default function isMap<T extends Map<unknown, unknown> = Map<unknown, unknown>>(payload: unknown): payload is T
{
    try { $has(payload, MARKER); } catch { return false; }
    return true;
}
