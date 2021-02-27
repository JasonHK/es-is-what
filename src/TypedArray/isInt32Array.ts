import getToStringTag from "./_helpers/getToStringTag";

const TO_STRING_TAG = "Int32Array";

export default function isInt32Array(payload: unknown): payload is Int32Array
{
    return (getToStringTag(payload) === TO_STRING_TAG);
}
