import { THEME } from '../../../identifiers'
export default {
  props: {
    cqTheme: String
  },
  data: () => ({
    closestThemedParent: false
  }),
  methods: {
    getClosestThemedParent ($parent) {
      if (!$parent || !$parent.$el || $parent._uid === 0) {
        return false
      }

      if ($parent.cqTheme || $parent.cqName) {
        return $parent
      }

      return this.getClosestThemedParent($parent.$parent)
    }
  },
  computed: {
    themeClass () {
      if (this.cqTheme) {
        return `${THEME}-${this.cqTheme}`
      }

      let theme = this.closestThemedParent.cqTheme

      if (!theme) {
        if (this.closestThemedParent) {
          theme = this.closestThemedParent.cqName
        } else {
          theme = this.$cqtool.currentTheme
        }
      }
      return `${THEME}-${theme}`
    }
  },
  mounted () {
    this.closestThemedParent = this.getClosestThemedParent(this.$parent)

    if (!this.$cqtool.currentTheme) {
      this.$cqtool.setCurrentTheme('default')
    }
  }
}
