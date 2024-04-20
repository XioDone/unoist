<h1 align="center">
Unoist
</h1>

<p align="center">
<a href="https://github.com/XioDone/unoist" target="_blank"><img alt="Github Badge" src="https://img.shields.io/badge/Star---?logo=github&logoColor=aliceblue&labelColor=18181B&color=61C200"></a>
<a href="https://www.npmjs.com/package/unoist" target="_blank"><img src="https://img.shields.io/npm/v/unoist.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="Version"></a>
</p>

<p align="center">⚡️ Make using UnoCSS simpler and easier.</p>

## Install

```bash
pnpm i unoist
```

## Usage

- Configure ESM as default in `package.json`, it's up to you

```json
{
  "type": "module"
}
```

- Add shortcuts to your `uno.config.ts`

```ts
import { useShortcuts } from 'unoist'
export default defineConfig({
  shortcuts: [
    // Your config ...
    ...useShortcuts(),
  ],
})
```

## recommendations plugins

- [vite-plugin-url-copy](https://www.npmjs.com/package/vite-plugin-url-copy) - Auto copy the Vite server URL and generate a QR code for easy access during dev or preview.

## License

[MIT](./LICENSE) License © 2024-PRESENT [XioDone](https://github.com/XioDone)
