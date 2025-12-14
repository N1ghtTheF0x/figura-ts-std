import State from "./state"

function __sm_tick__(sm: StateMachine<StateMachine.Parameters>,ticks: number): void
{
    
}

class StateMachine<P extends StateMachine.Parameters>
{
    public states: Array<State<P>> = []
    public parameters: P
    public readonly ANY: State<P> = this.createState("ANY")
    public readonly START: State<P> = this.createState("START")
    public currentState: State<P> = this.START
    public constructor(public readonly defaultParameters: Readonly<P>)
    {
        this.parameters = {...defaultParameters}
    }
    private _tick(ticks: number): void
    {
        const toState = this.currentState.getTransition(this.parameters)?.to
        if(toState !== undefined)
            this.transitionTo(toState)
        this.currentState.onTick?.(ticks)
    }
    public transitionTo(state: State<P>): this
    {
        this.currentState = state
        return this
    }
    public createState(name: string,onTick?: State.Callback): State<P>
    {
        const state = new State(this,name,onTick)
        this.states.push(state)
        return state
    }
    public resetParameters(): this
    {
        this.parameters = {...this.defaultParameters}
        return this
    }
}

namespace StateMachine
{
    export type Parameters = Record<string,string | number | boolean>
}

export default StateMachine