import { THEME } from '../../../identifiers'
export default {
  name: THEME,
  props: {
    mdTag: String,
    mdName: {
      type: String,
      default: 'default'
    }
  },
  data: () => ({
    name: THEME
  }),
  render (h) {
    if (this.mdTag || this.$slots.default.length > 1) {
      return h(this.mdTag || 'div', {
        staticClass: THEME
      }, this.$slots.default)
    }

    return this.$slots.default[0]
  }
}
