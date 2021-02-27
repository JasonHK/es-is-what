import getToStringTag from "./_helpers/getToStringTag";

const TO_STRING_TAG = "Float32Array";

export default function isFloat32Array(payload: unknown): payload is Float32Array
{
    return (getToStringTag(payload) === TO_STRING_TAG);
}
