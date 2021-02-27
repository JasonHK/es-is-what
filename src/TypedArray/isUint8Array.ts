import getToStringTag from "./_helpers/getToStringTag";

const TO_STRING_TAG = "Uint8Array";

export default function isUint8Array(payload: unknown): payload is Uint8Array
{
    return (getToStringTag(payload) === TO_STRING_TAG);
}
