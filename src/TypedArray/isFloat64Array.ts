import getToStringTag from "./_helpers/getToStringTag";

const TO_STRING_TAG = "Float64Array";

export default function isFloat64Array(payload: unknown): payload is Float64Array
{
    return (getToStringTag(payload) === TO_STRING_TAG);
}
