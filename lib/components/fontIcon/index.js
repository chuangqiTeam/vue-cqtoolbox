import cqFontIcon from './cqFontIcon.vue'
import cqFontIconTheme from './cqFontIcon.theme'
import { ICON } from '../../identifiers'

export default function install (Vue) {
  Vue.component(ICON, cqFontIcon)
  Vue.cqtool.styles.push(cqFontIconTheme)
}
