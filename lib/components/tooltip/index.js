import cqTooltip from './cqTooltip.vue'
import { TOOLTIP } from '../../identifiers'
export default function install (Vue) {
  Vue.component(TOOLTIP, cqTooltip)
}
