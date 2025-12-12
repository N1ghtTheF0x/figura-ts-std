import { stringify } from "./string"

// all the keys of the avatar
const __avatarKeys: Array<string> = []
export class Avatar
{
    
}
export namespace Avatar
{
    /**
     * Store avatar variable `value` as `key`. The Key can be a instance of any kind
     * @param key A instance of any kind
     * @param value A value
     */
    export function setVariable(key: any,value: any): void
    {
        const k = stringify(key)
        if(!__avatarKeys.includes(k))
            __avatarKeys.push(k)
        avatar.store(tostring(__avatarKeys.indexOf(k)),value)
    }
    /**
     * Retrieve the avatar variable at `key`, even if it's nil. The key can be a instance of any kind
     * @param key A instance of any kind
     * @param required Throw if the variable is nil
     */
    export function getVariable<V>(key: any,required?: false): V | undefined
    /**
     * Retrieve the avatar variable at `key`. The key can be a instance of any kind
     * @param key A instance of any kind
     * @param required Throw if the variable is nil
     * @throws If avatar variable is nil
     */
    export function getVariable<V>(key: any,required?: true): V
    export function getVariable<V>(key: any,required: boolean = true): V | undefined
    {
        const k = stringify(key)
        const vars = world.avatarVars().get(avatar.getUUID()) ?? new LuaTable
        const value = vars.get(tostring(__avatarKeys.indexOf(k)))
        if(value === undefined && required)
            error(`avatar variable '${key}' is nil`,1)
        return value
    }
}