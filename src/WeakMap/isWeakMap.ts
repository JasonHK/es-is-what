import callBound from "call-bind/callBound";

const MARKER = {};

const $has = callBound("%WeakMap.prototype.has%");

export default function isWeakMap(payload: unknown): payload is WeakMap<object, unknown>
{
    try { $has(payload, MARKER); } catch { return false; }
    return true;
}
