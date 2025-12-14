import { registerHostOnlyEvent } from "./event"
import ActionWheelPage from "./page"
import { loadVariables } from "./vars"

const AVATAR_LOCAL_ENTITY_INIT_EVENT_NAME = "figura-ts-std-avatar-init"

export abstract class Avatar
{
    public readonly actionWheel: ActionWheelPage = new ActionWheelPage("Main").use()
    public load(): void
    {
        registerHostOnlyEvent("ENTITY_INIT",() => this.init(),AVATAR_LOCAL_ENTITY_INIT_EVENT_NAME)
    }
    public init(): void
    {
        vanilla_model.PLAYER.setVisible(false)
        loadVariables()
    }
}

export namespace Avatar
{
    export type Constructor<A extends Avatar> = new () => A
    export function load<A extends Avatar>(Class: Constructor<A>): A
    {
        const a = new Class()
        a.load()
        return a
    }
}