import cqButton from './cqButton.vue'
import cqButtonTheme from './cqButton.theme'
import { BUTTON } from '../../identifiers'

export default function install (Vue) {
  Vue.component(BUTTON, cqButton)
  Vue.cqtool.styles.push(cqButtonTheme)
}
