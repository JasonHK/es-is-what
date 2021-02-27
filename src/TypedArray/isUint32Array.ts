import getToStringTag from "./_helpers/getToStringTag";

const TO_STRING_TAG = "Uint32Array";

export default function isUint32Array(payload: unknown): payload is Uint32Array
{
    return (getToStringTag(payload) === TO_STRING_TAG);
}
