import cqInputContainer from './cqInputContainer.vue'
import cqInput from './cqInput.vue'
import cqTextarea from './cqTextarea.vue'
import cqInputContainerTheme from './cqInputContainer.theme'

import { INPUT, TEXTAREA, INPUT_CONTAINER } from '../../identifiers'
export default function install (Vue) {
  Vue.component(INPUT_CONTAINER, cqInputContainer)
  Vue.component(INPUT, cqInput)
  Vue.component(TEXTAREA, cqTextarea)

  Vue.cqtool.styles.push(cqInputContainerTheme)
}
