import CqCore from './core'

import CqSection from './components/section'

import CqButton from './components/button'
import CqButtonGroup from './components/buttonGroup'
import CqIcon from './components/fontIcon'
import CqInputContainer from './components/inputContainer'
import CqSwitch from './components/switch'
import CqTooltip from './components/tooltip'

const options = {
  CqCore,
  CqSection,
  CqButton,
  CqButtonGroup,
  CqIcon,
  CqInputContainer,
  CqSwitch,
  CqTooltip
}

options.install = (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component]
    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller)
    }
  }
}

export default options
