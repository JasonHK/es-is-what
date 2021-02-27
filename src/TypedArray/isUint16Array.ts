import getToStringTag from "./_helpers/getToStringTag";

const TO_STRING_TAG = "Uint16Array";

export default function isUint16Array(payload: unknown): payload is Uint16Array
{
    return (getToStringTag(payload) === TO_STRING_TAG);
}
