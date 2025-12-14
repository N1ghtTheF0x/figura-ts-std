import { hostDebug } from "./console"

export function getFiguraLuaEvent<K extends keyof FiguraEventMap>(eventName: K): FiguraLuaEvent<FiguraEventMap[K]> | undefined
{
    return eventName in events ? events[eventName] as FiguraLuaEvent<FiguraEventMap[K]> : undefined
}
/**
 * Register a event only in a host environment. This won't get executed by remote players
 * @param eventName The event name
 * @param callback The callback of the event
 * @param name The name of the event callback if provided
 */
export function registerHostOnlyEvent<K extends keyof FiguraEventMap>(eventName: K,callback: FiguraEventMap[K],name?: string): void
{
    if(!host.isHost()) return
    if(eventName in events)
    {
        hostDebug("Registered host-only event",name ?? "???","for",eventName);
        getFiguraLuaEvent(eventName)!
        .register(callback,name as string)
    }
}