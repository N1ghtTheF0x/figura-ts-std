import type StateMachine from "./machine"
import State from "./state"

class StateTransition<P extends StateMachine.Parameters>
{
    public conditions: Array<StateTransition.Condition<P>> = []
    public constructor(public from: State<P>,public to: State<P>)
    {

    }
    public canTransition(parameters: P): boolean
    {
        return this.conditions.some(cond => cond(parameters))
    }
    public addCondition(condition: StateTransition.Condition<P>): this
    {
        this.conditions.push(condition)
        return this
    }
}

namespace StateTransition
{
    export type Condition<P extends StateMachine.Parameters> = (this: void,parameters: P) => boolean
}

export default StateTransition