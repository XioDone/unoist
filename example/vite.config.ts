import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ServerUrlCopy from 'vite-plugin-url-copy'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    ServerUrlCopy(),
    UnoCSS(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue'],
      resolvers: [],
      dirs: ['./src/composables/**', './src/hooks/**'],
      dts: 'src/types/auto-imports.d.ts',
      vueTemplate: true,
    }),
    Components({
      resolvers: [],
      dts: 'src/types/components.d.ts',
    }),
  ],
  server: {
    host: true,
  },
})
