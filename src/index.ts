import type { ConfigBase } from 'unocss'

export function useAttrShortcuts() {
  const shortcuts: ConfigBase['shortcuts'] = [
    // width & height
    [/^wh-([^>]+)$/, ([, num]) => `w-${num} h-${num}`],
    // text
    [/^(?:fs|t)-([^>]+)$/, ([, body]) => `text-${body}`],
    // !important
    [/^i:([^>]+)$/, ([, body]) => `!${body}`],
    [/^(.+):i$/, ([, body]) => `!${body}`],
    // percent
    [/(.+\d)p$/, ([, body]) => `${body}%`],
  ]
  return shortcuts
}

export function useShortcuts() {
  const shortcuts: ConfigBase['shortcuts'] = [
    {
      'hide': 'hidden',
      'flex-center': 'flex items-center justify-center',
    },
    ...useAttrShortcuts(),
  ]
  return shortcuts
}
