export default interface RegExpLike
{
    [Symbol.match](string: string): RegExpMatchArray | null;
}
