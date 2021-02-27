import callBound from "call-bind/callBound";

const $buffer = callBound("%DataView.prototype.buffer%");

export default function isDataView(payload: unknown): payload is DataView
{
    try { $buffer(payload as DataView); } catch { return false; }
    return true;
}
