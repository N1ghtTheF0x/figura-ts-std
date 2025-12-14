import type StateMachine from "./machine"
import StateTransition from "./transition"

class State<P extends StateMachine.Parameters>
{
    public transitions: Array<StateTransition<P>> = []
    public constructor(public readonly machine: StateMachine<P>,public readonly name: string,public readonly onTick?: State.Callback)
    {

    }
    public canTransition(parameters: P): boolean
    {
        return this.transitions.some(trans => trans.canTransition(parameters))
    }
    public getTransition(parameters: P): StateTransition<P> | undefined
    {
        return this.transitions.find(trans => trans.canTransition(parameters))
    }
    public createTransition(to: State<P>): StateTransition<P>
    {
        const trans = new StateTransition(this,to)
        this.transitions.push(trans)
        return trans
    }
}

namespace State
{
    export type Callback = (this: void,ticks: number) => void
}

export default State