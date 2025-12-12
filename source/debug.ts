// default way of triggering debug
const DEFAULT_DEBUG = host.isHost() && !host.isAvatarUploaded()

// user can force debug
let __forceDebug = false

/**
 * Set a flag to enable debugging features
 * @param debug A flag
 */
export function setForceDebug(debug: boolean): void
{
    __forceDebug = true
}

/**
 * Are we currently debugging something?
 */
export const isDebugging = () => DEFAULT_DEBUG || __forceDebug