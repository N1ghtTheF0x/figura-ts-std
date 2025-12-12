import { registerHostOnlyEvent } from "../event"
import { Syncronize } from "../network"

const EVENT_NAME = "figura-ts-std-animation-manager"
let count = 0

export class AnimationManager
{
    @Syncronize()
    public index: number = 0
    public readonly eventName: string
    public constructor(public readonly animations: Array<FiguraAnimation>)
    {
        registerHostOnlyEvent("TICK",() => this._local_tick(),this.eventName = `${EVENT_NAME}-${count++}`)
    }
    private _local_tick(): void
    {
        this.index
    }
    public setIndex(index: number): this
    {

        return this
    }
}