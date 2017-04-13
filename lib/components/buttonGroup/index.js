import cqButtonGroup from './cqButtonGroup.vue'
import cqButtonGroupTheme from './cqButtonGroup.theme'

import { BUTTON_GROUP } from '../../identifiers'

export default function install (Vue) {
  Vue.component(BUTTON_GROUP, cqButtonGroup)
  Vue.cqtool.styles.push(cqButtonGroupTheme)
}
