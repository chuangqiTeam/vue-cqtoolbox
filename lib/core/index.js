/* Code Components */
import CqTheme from './components/theme'
import CqInkRipple from './components/ripple'
import CoreTheme from './styles/core.theme'

/* Core Styles */
import './styles/core.scss'

export default function install (Vue) {
  if (install.installed) {
    console.warn('Vue CqToolBox is already installed.')
    return
  }

  install.installed = true

  Vue.use(CqTheme)
  Vue.use(CqInkRipple)
  Vue.cqtool.styles.push(CoreTheme)
}
