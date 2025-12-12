# figura-ts-std

```txt
WARNING! THIS NPM PACKAGE ONLY CONTAINS LUA FILES, NO JAVASCRIPT
```

A standard library for [Figura][figura-url] that uses [figura-ts][figura-ts-url] which in return is for [typescript-to-lua][tstl-url] but can be used in a [normal lua environment][releases-url] too!

## Setup

### TypeScript (`typescript-to-lua`)

Install this package using any package manager:

```sh
npm install figura-ts-std
```

Then use imports to use the library. Keep in mind that you need a valid `tsconfig.json` for `typescript-to-lua`

```ts
import { ... } from "figura-ts-std";
```

### Lua

[Donwload the latest release][releases-url] that is not `Source code (...)` and put it in your folder where your avatar resides. Then use `require` to use the library.

```lua
local std = require("std.index")
```

### Documentation

[Check them out here][docs-url]!

[figura-url]: https://figuramc.org/
[figura-ts-url]: https://github.com/N1ghtTheF0x/figura-ts
[releases-url]: https://github.com/N1ghtTheF0x/figura-ts-std/releases/latest
[docs-url]: ./docs/README.md
[tstl-url]: https://typescripttolua.github.io/
