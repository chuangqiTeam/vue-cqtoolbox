<template>
  <input
    :class="className"
    :type="type"
    :value="value"
    :disabled="disabled"
    :required="required"
    :placeholder="placeholder"
    :maxlength="maxlength"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
    @keydown.up="onInput"
    @keydown.down="onInput">
</template>

<script>
  import common from './common'
  import getClosestVueParent from '../../core/utils/getClosestVueParent'
  import { INPUT, INPUT_CONTAINER } from '../../identifiers'
  export default {
    mixins: [common],
    props: {
      type: {
        type: String,
        default: 'text'
      }
    },
    computed: {
      className () {
        return [INPUT]
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.parentContainer = getClosestVueParent(this.$parent, INPUT_CONTAINER)

        if (!this.parentContainer) {
          this.$destroy()

          throw new Error(`You should wrap the ${INPUT} in a ${INPUT_CONTAINER}`)
        }

        this.setParentDisabled()
        this.setParentRequired()
        this.setParentPlaceholder()
        this.handleMaxLength()
        this.updateValues()
      })
    }
  }
</script>
