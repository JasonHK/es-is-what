import getToStringTag from "./_helpers/getToStringTag";

const TO_STRING_TAG = "Int16Array";

export default function isInt16Array(payload: unknown): payload is Int16Array
{
    return (getToStringTag(payload) === TO_STRING_TAG);
}
