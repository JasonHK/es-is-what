interface IsInteger
{
    (payload: number): boolean;
    (payload: unknown): payload is number;
}

const isInteger: IsInteger = Number.isInteger as IsInteger;

export default isInteger;
