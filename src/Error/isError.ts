import getToStringTag from "../_utilities/getToStringTag";

import isErrorLike from "./isErrorLike";

const TO_STRING_TAG = "Error";

export default function isError(payload: unknown): payload is Error
{
    return (isErrorLike(payload) && (getToStringTag(payload) === TO_STRING_TAG));
}
