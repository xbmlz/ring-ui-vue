import { App, Plugin } from 'vue'
import RingButton from './components/button'
import { InstallOptions } from './utils'

import './theme/index.scss'

const components: Record<string, Plugin> = {
  RingButton,
}

const install = (app: App, options?: InstallOptions): void => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options)
    // TODO
  }
}

export { RingButton, install }

export default {
  install,
}
