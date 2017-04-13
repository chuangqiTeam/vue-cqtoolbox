import cqSwitch from './cqSwitch.vue'
import cqSwitchTheme from './cqSwitch.theme'

import { SWITCH } from '../../identifiers'
export default function install (Vue) {
  Vue.component(SWITCH, cqSwitch)
  Vue.cqtool.styles.push(cqSwitchTheme)
}
