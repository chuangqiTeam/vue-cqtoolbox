<template>
  <div :class="[className, themeClass]" >
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./cqButtonGroup.scss"></style>

<script>
  import theme from '../../core/components/theme/mixin'
  import { BUTTON, TOGGLE, BUTTON_GROUP } from '../../identifiers'

  let onClickButton

  export default {
    props: {
      single: Boolean
    },
    mixins: [theme],
    computed: {
      className () {
        return [BUTTON_GROUP]
      }
    },
    mounted () {
      this.$children.forEach((child) => {
        let element = child.$el
        let toggleClass = TOGGLE

        onClickButton = () => {
          if (this.single) {
            this.$children.forEach((child) => {
              child.$el.classList.remove(toggleClass)
            })

            element.classList.add(toggleClass)
          } else {
            element.classList.toggle(toggleClass)
          }
        }

        if (element && element.classList.contains(BUTTON)) {
          element.addEventListener('click', onClickButton)
        }
      })
    },
    beforeDestroy () {
      this.$children.forEach((child) => {
        let element = child.$el

        if (element && element.classList.contains(BUTTON)) {
          element.removeEventListener('click', onClickButton)
        }
      })
    }
  }
</script>
