import { isDebugging } from "./debug"

/**
 * Print to chat/console on host only
 * @param args Print arguments
 */
export function hostPrint(...args: Array<any>): void
{
    if(!host.isHost()) return
    print(...args)
}

/**
 * Throw an error on host only
 * @param message A message
 * @param level Error level
 */
export function hostError(message: string,level: number): any
{
    if(!host.isHost()) return undefined
    return error(message,level)
}

/**
 * Print to chat/console if debugging is enabled
 * @param args Print arguments
 */
export function hostDebug(...args: Array<any>): void
{
    if(isDebugging())
        hostPrint(...args)
}