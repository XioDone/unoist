import antfu from '@antfu/eslint-config'
import xiodone from '@xiodone/eslint-config'

const config = antfu(
  ...xiodone(),
)

export default config
