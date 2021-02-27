import getToStringTag from "./_helpers/getToStringTag";

const TO_STRING_TAG = "BigUint64Array";

export default function isBigUint64Array(payload: unknown): payload is BigUint64Array
{
    return (getToStringTag(payload) === TO_STRING_TAG);
}
