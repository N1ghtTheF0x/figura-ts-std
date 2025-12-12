import { readdir, rm } from "node:fs/promises"
import { resolve } from "node:path"

const STD_FOLDERPATH = resolve(import.meta.dirname,"std")

for(const path of await readdir(STD_FOLDERPATH,{recursive: true}).catch(() => []))
{
    const fullpath = resolve(STD_FOLDERPATH,path)
    await rm(fullpath,{recursive: true}).catch(() => void 0)
}