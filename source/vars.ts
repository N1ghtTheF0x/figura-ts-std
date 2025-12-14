import { hostDebug } from "./console"
import { stringify } from "./string"

export type AllowedVariableType = number | boolean

export function getVariable<V extends AllowedVariableType>(key: any,fromConfig: boolean = false): V | undefined
{
    const k = stringify(key)
    if(fromConfig && config)
        return config.load(key)
    return world.avatarVars().get(avatar.getUUID()).get(k) ?? undefined
}

export function getVariables(fromConfig: boolean = false): Array<[key: string,value: AllowedVariableType]>
{
    const data = (fromConfig && config ? config.load() : world.avatarVars().get(avatar.getUUID())) as LuaTable<string,AllowedVariableType>
    return Object.entries(data)
}

export function setVariable<V extends AllowedVariableType>(key: any,value: V,toConfig: boolean = false): V
{
    const k = stringify(key)
    hostDebug("setting",key,"to",value)
    if(toConfig)
        config?.save(key,value)
    avatar.store(key,value)
    return value
}

export function loadVariables(): void
{
    hostDebug("loading variables...")
    const variables = getVariables(true)
    for(const [key,value] of variables)
        config?.save(key,value)
}