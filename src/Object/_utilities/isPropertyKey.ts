import isString from "../../String/isString";
import isSymbol from "../../Symbol/isSymbol";
import isNumber from "../../Number/isNumber";

export default function isPropertyKey(payload: unknown): payload is PropertyKey
{
    return (isString(payload) || isSymbol(payload) || isNumber(payload));
}
