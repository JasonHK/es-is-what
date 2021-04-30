import callBound from "call-bind/callBound";

const MARKER = {};

const $has = callBound("%WeakSet.prototype.has%");

export default function isWeakSet(payload: unknown): payload is WeakSet<object>
{
    try { $has(payload, MARKER); } catch { return false; }
    return true;
}
