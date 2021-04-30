import callBound from "call-bind/callBound";

// Used as the value of the key when calling `Map.prototype.has`.
const MARKER = {};

const $has = callBound("%Map.prototype.has%");

export default function isMap(payload: unknown): payload is Map<unknown, unknown>
{
    try { $has(payload, MARKER); } catch { return false; }
    return true;
}
