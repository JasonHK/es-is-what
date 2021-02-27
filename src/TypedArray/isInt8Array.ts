import getToStringTag from "./_helpers/getToStringTag";

const TO_STRING_TAG = "Int8Array";

export default function isInt8Array(payload: unknown): payload is Int8Array
{
    return (getToStringTag(payload) === TO_STRING_TAG);
}
