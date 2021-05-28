import GetIntrinsic from "get-intrinsic";

interface IsArrayBufferView
{
    (payload: unknown): payload is ArrayBufferView;
}

const isArrayBufferView: IsArrayBufferView = GetIntrinsic("%ArrayBuffer.isView%");

export default isArrayBufferView;
