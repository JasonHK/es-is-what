interface IsFinite
{
    (payload: number): boolean;
    (payload: unknown): payload is number;
}

const isFinite: IsFinite = Number.isFinite as IsFinite;

export default isFinite;
