import CqInkRipple from './cqInkRipple'
import { RIPPLE } from '../../../identifiers'

export default function install (Vue) {
  Vue.component(RIPPLE, CqInkRipple)
}
