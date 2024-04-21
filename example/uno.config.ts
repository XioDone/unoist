import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { useShortcuts } from 'unoist'
import { generateSafelist } from './src/composables/docs'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    // presetForms(),
    presetTypography(),
    presetWebFonts({
      // provider: 'bunny',
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        nunito: ['Nunito'],
      },
    }),
  ],
  shortcuts: [
    {
      'drag-none': 'pointer-events-none select-none',
      'card-pd': 'p-5 sm:p-8',
      'card-bg': 'bg-light-300 dark:bg-dark-600',
      'card': 'rounded-lg shadow card-pd card-bg',
    },
    {
      'feed-box': 'md:mx-auto lg:max-w-4xl md:max-w-3xl',
    },
    ...useShortcuts(),
  ],
  theme: {
    colors: {
      primary: '#4D9375',
      primaryLight: '#4D9375',
      success: '#67c23a',
      warning: '#ffb400',
      danger: '#f53f3f',
      info: '#909399',
      secondary: '#009ff7',
    },
    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1360px',
      'xxl': '1360px',
      '3xl': '1536px',
      'xxxl': '1536px',
    },
  },
  autocomplete: {
    templates: ['fs-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)'],
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: generateSafelist(),
})
