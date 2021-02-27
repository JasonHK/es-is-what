import callBound from "call-bind/callBound";

const MARKER: object = Object.create(null);

const $has = callBound("%WeakMap.prototype.has%");

export default function isWeakMap<T extends WeakMap<object, unknown> = WeakMap<object, unknown>>(payload: unknown): payload is T
{
    try { $has(payload, MARKER); } catch { return false; }
    return true;
}
