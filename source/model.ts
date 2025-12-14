import { hostError } from "./console"

export const MODEL_SIDES = ["Left","Right"] as const
export type ModelSide = typeof MODEL_SIDES[number]

const model = models.model

function __require_part__(base: FiguraModelPart,name: string,required?: boolean): FiguraModelPart
{
    if(name in base)
        return base[name]
    hostError(`model '${name}' in '${base.getName()}' does not exist`,1)
}

class PlayerModel
{
    public readonly Base: FiguraModelPart
    public readonly Root: FiguraModelPart
    public readonly Head: FiguraModelPart
    public readonly Body: FiguraModelPart
    public readonly LeftArm: FiguraModelPart
    public readonly RightArm: FiguraModelPart
    public readonly LeftLeg: FiguraModelPart
    public readonly RightLeg: FiguraModelPart
    public constructor(public readonly modelName: string)
    {
        this.Base = __require_part__(models,modelName)
        this.Root = __require_part__(this.Base,"root")
    }
}

export default {
    Head: () => model.root.Head,
    Body: () => model.root.Body,
    Arm: (side: ModelSide) => model.root[`${side}Arm`],
    Leg: (side: ModelSide) => model.root[`${side}Leg`],
}
