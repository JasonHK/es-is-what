interface IsSafeInteger
{
    (payload: number): boolean;
    (payload: unknown): payload is number;
}

const isSafeInteger: IsSafeInteger = Number.isSafeInteger as IsSafeInteger;

export default isSafeInteger;
