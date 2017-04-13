import cqSection from './cqSection.vue'
import { SECTION } from '../../identifiers'

export default function install (Vue) {
  Vue.component(SECTION, cqSection)
}
