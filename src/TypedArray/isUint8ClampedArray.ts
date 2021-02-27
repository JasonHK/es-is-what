import getToStringTag from "./_helpers/getToStringTag";

const TO_STRING_TAG = "Uint8ClampedArray";

export default function isUint8ClampedArray(payload: unknown): payload is Uint8ClampedArray
{
    return (getToStringTag(payload) === TO_STRING_TAG);
}
