/**
 * Union for any kind of instance that could be stringified
 */
export type Stringify = {toString(): string} | string

/**
 * Check if `v` has a `toString` method
 * @param v A instance of any kind
 */
export function hasToString<V>(this: void,v: V): v is Stringify & V
{
    return v !== null && typeof v == "object" && "toString" in v && typeof v.toString == "function"
}

/**
 * Stringify `v`
 * @param v A instance of any kind
 */
export function stringify<V>(this: void,v: V)
{
    return hasToString(v) ? v.toString() : tostring(v)
}