import getToStringTag from "./_helpers/getToStringTag";

const TO_STRING_TAG = "BigInt64Array";

export default function isBigInt64Array(payload: unknown): payload is BigInt64Array
{
    return (getToStringTag(payload) === TO_STRING_TAG);
}
