import callBound from "call-bind/callBound";

const $then = callBound("%Promise.prototype.then%");

export default function isPromise<T extends Promise<unknown> = Promise<unknown>>(payload: unknown): payload is T
{
    try { $then(payload); } catch { return false; }
    return true;
}
