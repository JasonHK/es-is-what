"use strict";

import { TAG_DATA_VIEW } from "../_internal/string-tags";

import { hasToStringTagOf } from "../object/utilities/has-to-string-tag-of";
import { isInstanceOf } from "../object/utilities/is-instance-of";

export function isDataView(payload: unknown): payload is DataView
{
    return (isInstanceOf(payload, DataView) || hasToStringTagOf(payload, TAG_DATA_VIEW));
}
