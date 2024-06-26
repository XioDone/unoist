export const docs = [
  {
    title: 'flex-center',
    code: 'flex-center',
    compiled: ['display: flex', 'align-items: center', 'justify-content: center'],
    preview: 'flex-center w-200px h-100px',
    desc: 'Flex items & justify center',
  },
  {
    title: 'hide',
    code: 'hide',
    compiled: ['display: none'],
    preview: 'hide',
    desc: 'Hidden',
  },
  {
    title: 'wh',
    code: 'wh-100px',
    compiled: ['width: 100px', 'height: 100px'],
    preview: 'wh-100px',
    desc: 'Width & Height',
  },
  {
    title: 'fs',
    alias: 't',
    code: 'fs-30px fs-center',
    compiled: ['font-size: 30px', 'text-align: center'],
    preview: 'fs-30px fs-center',
    desc: 'Aliases for text, fs = t = text',
  },
  {
    title: 'i:',
    alias: ':i',
    code: 'i:fs-26px fs-center:i',
    compiled: ['font-size: 26px !important', 'text-align: center !important'],
    preview: 'i:fs-26px fs-center:i',
    desc: '!important',
  },
  {
    title: 'p',
    alias: '',
    code: 'w-50p',
    compiled: ['width: 50%'],
    preview: 'w-50p',
    desc: 'Percent sign %',
  },
]

export function generateSafelist() {
  const list = docs.map(item => {
    return item.code.split(' ')
  })
  return list.flat()
}
