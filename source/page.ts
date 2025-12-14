import { hostDebug } from "./console"

class ActionWheelPage
{
    private _: FiguraPage
    public constructor(title: string)
    {
        hostDebug("created new page",title)
        this._ = action_wheel.newPage(title)
    }
    public addPage(title: string,look?: ActionWheelPage.IPageLook): ActionWheelPage
    {
        const page = new ActionWheelPage(title)
        .addAction({
            title: "Back",
            display: {
                itemstack: "minecraft:nether_star"
            },
            onLeftClick: () => this.use()
        })
        this.addAction({
            title: title,
            onLeftClick: () => page.use(),
            display: look?.display,
            hoverDisplay: look?.hoverDisplay
        })
        return page
    }
    public use(): this
    {
        action_wheel.setPage(this._)
        return this
    }
    public addAction(action: ActionWheelPage.IAction): this
    {
        hostDebug("added new action to",this._.getTitle())
        const a = this._.newAction()
        if(action.title !== undefined)
            a.setTitle(action.title)
        if(action.toggledTitle !== undefined)
            a.setToggleTitle(action.toggledTitle)
        function __display__(d: ActionWheelPage.IAction.IDisplay,type: "Hover" | "" = ""): void
        {
            if(d.color !== undefined)
                a[`set${type}Color`](d.color)
            if(d.itemstack !== undefined)
                a[`set${type}Item`](d.itemstack as string)
            if(d.texture !== undefined)
            {
                const tex = d.texture
                if(tex.scale !== undefined && tex.width !== undefined && tex.height !== undefined && tex.uv !== undefined)
                    a[`set${type}Texture`](tex.texture,tex.uv.x,tex.uv.y,tex.width,tex.height,tex.scale)
                else if(tex.width !== undefined && tex.height !== undefined && tex.uv !== undefined)
                    a[`set${type}Texture`](tex.texture,tex.uv.x,tex.uv.y,tex.width,tex.height)
                else if(tex.uv !== undefined)
                    a[`set${type}Texture`](tex.texture,tex.uv.x,tex.uv.y)
                else
                    a[`set${type}Texture`](tex.texture)
            }
        }
        if(action.display !== undefined)
            __display__(action.display)
        if(action.hoverDisplay !== undefined)
            __display__(action.hoverDisplay,"Hover")
        if(action.onLeftClick !== undefined)
            a.setOnLeftClick(action.onLeftClick)
        if(action.onRightClick !== undefined)
            a.setOnRightClick(action.onRightClick)
        if(action.onScroll !== undefined)
            a.setOnScroll(action.onScroll)
        if(action.onToggle !== undefined)
            a.setOnToggle(action.onToggle)
        if(action.onUntoggle !== undefined)
            a.setOnUntoggle(action.onUntoggle)
        if(action.toggled !== undefined)
            a.setToggled(action.toggled)
        return this
    }
}
namespace ActionWheelPage
{
    export interface IAction
    {
        title?: string
        toggledTitle?: string
        display?: IAction.IDisplay
        hoverDisplay?: IAction.IDisplay
        toggled?: boolean
        onLeftClick?: (this: void) => void
        onRightClick?: (this: void) => void
        onScroll?: (this: void,dir: number) => void
        onToggle?: (this: void,toggle: boolean) => void
        onUntoggle?: (this: void,toggle: boolean) => void
    }
    export interface IPageLook
    {
        display?: IAction.IDisplay
        hoverDisplay?: IAction.IDisplay
    }
    export namespace IAction
    {
        export interface IDisplay
        {
            color?: FiguraVec3
            itemstack?: Minecraft.Identifier | FiguraItemStack
            texture?: ITexture
        }
        export interface ITexture
        {
            texture: FiguraTexture
            uv?: FiguraVec2
            width?: number
            height?: number
            scale?: number
        }
    }
}

export default ActionWheelPage