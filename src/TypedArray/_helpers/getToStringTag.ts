import GetIntrinsic from "get-intrinsic";
import callBind from "call-bind";

interface GetToStringTag
{
    (payload: unknown): string | undefined;
}

let getToStringTag: GetToStringTag;
{
    const $getOwnPropertyDescriptor = GetIntrinsic("%Reflect.getOwnPropertyDescriptor%");

    const $prototype = GetIntrinsic("%TypedArray.prototype%");
    getToStringTag = callBind($getOwnPropertyDescriptor($prototype, Symbol.toStringTag)!.get!);
}

export default getToStringTag;
