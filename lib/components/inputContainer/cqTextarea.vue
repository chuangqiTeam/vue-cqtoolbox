<template>
  <textarea
    :class="className"
    :value="value"
    :disabled="disabled"
    :required="required"
    :placeholder="placeholder"
    :maxlength="maxlength"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"></textarea>
</template>

<script>
  import autosize from 'autosize'
  import common from './common'
  import getClosestVueParent from '../../core/utils/getClosestVueParent'
  import { INPUT, TEXTAREA, INPUT_CONTAINER } from '../../identifiers'
  export default {
    mixins: [common],
    computed: {
      className () {
        return [INPUT]
      }
    },
    watch: {
      value () {
        this.$nextTick(() => {
          autosize.update(this.$el)
        })
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.parentContainer = getClosestVueParent(this.$parent, INPUT_CONTAINER)

        if (!this.parentContainer) {
          this.$destroy()

          throw new Error(`You should wrap the ${TEXTAREA} in a ${INPUT_CONTAINER}`)
        }

        this.setParentDisabled()
        this.setParentRequired()
        this.setParentPlaceholder()
        this.handleMaxLength()
        this.updateValues()

        if (!this.$el.getAttribute('rows')) {
          this.$el.setAttribute('rows', '1')
        }

        autosize(this.$el)
      })
    },
    beforeDestroy () {
      autosize.destroy(this.$el)
    }
  }
</script>
