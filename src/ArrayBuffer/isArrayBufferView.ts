interface IsArrayBufferView
{
    (payload: unknown): payload is ArrayBufferView;
}

const isArrayBufferView: IsArrayBufferView = ArrayBuffer.isView;

export default isArrayBufferView;
