import callBound from "call-bind/callBound";

interface BadString extends Pick<String, "toString" | "valueOf">
{
    toString(): never;

    valueOf(): never;

    [Symbol.toPrimitive](): never;
}

interface $exec
{
    (thisArg: unknown, string: string): RegExpExecArray | null;
    (thisArg: unknown, string: BadString): never;
}

const $exec: $exec = callBound("%RegExp.prototype.exec%") as $exec;

const MARKER: object = Object.create({});

let BAD_STRING: BadString;
{
    function throwMarker(): never
    {
        throw MARKER;
    }

    BAD_STRING = {
        toString: throwMarker,
        valueOf: throwMarker,
        [Symbol.toPrimitive]: throwMarker,
    };
};

export default function isRegExp(payload: unknown): payload is RegExp
{
    try { $exec(payload, BAD_STRING); } catch (error) { return (error === MARKER); }
}
