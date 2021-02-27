import callBound from "call-bind/callBound";

const $then = callBound("%Promise.prototype.then%");

const noop = () => {};

export default function isPromise<T extends Promise<unknown> = Promise<unknown>>(payload: unknown): payload is T
{
    try { $then(payload, noop, noop); } catch { return false; }
    return true;
}
