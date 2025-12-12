import { registerHostOnlyEvent } from "./event"

const NETWORK_PING_NAME = "figura-ts-std-network"
const NETWORK_LOCAL_TICK_EVENT_NAME = `${NETWORK_PING_NAME}-local-tick-event`

let __registeredLocalTick = false
let __pings = 0

function __local_tick__(this: void): void
{

}

function __register_local_tick__(this: void): void
{
    if(!__registeredLocalTick)
    {
        __registeredLocalTick = true
        registerHostOnlyEvent("TICK",__local_tick__,NETWORK_LOCAL_TICK_EVENT_NAME)
    }
}

export function Syncronize<V>(this: void)
{
    __register_local_tick__()
    return function(target: any,context: ClassFieldDecoratorContext)
    {
        const pingName = `${NETWORK_PING_NAME}-${__pings++}`
        pings[pingName]
        return function(initialValue: V): V
        {
            
            return initialValue
        }
    }
}