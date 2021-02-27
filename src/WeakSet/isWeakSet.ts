import callBound from "call-bind/callBound";

const MARKER: object = Object.create(null);

const $has = callBound("%WeakSet.prototype.has%");

export default function isWeakSet<T extends WeakSet<object> = WeakSet<object>>(payload: unknown): payload is T
{
    try { $has(payload, MARKER); } catch { return false; }
    return true;
}
