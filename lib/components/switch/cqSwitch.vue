<template>
  <div :class="[className, themeClass, classes]">
    <div class="cq-switch-container" @click="toggle($event)">
      <div class="cq-switch-thumb" :style="styles">
        <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="value">
        <button :type="type" class="cq-switch-holder"></button>
        <cq-ink-ripple :cq-disabled="disabled" />
      </div>
    </div>

    <label :for="id || name" class="cq-switch-label" v-if="$slots.default">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./cqSwitch.scss"></style>

<script>
  import theme from '../../core/components/theme/mixin'
  import { SWITCH } from '../../identifiers'
  const checkedPosition = 75
  const initialPosition = '-1px'

  export default {
    props: {
      name: String,
      value: Boolean,
      id: String,
      disabled: Boolean,
      type: {
        type: String,
        default: 'button'
      }
    },
    mixins: [theme],
    data () {
      return {
        leftPos: initialPosition,
        checked: this.value
      }
    },
    computed: {
      className () {
        return [SWITCH]
      },
      classes () {
        return {
          'cq-checked': Boolean(this.value),
          'cq-disabled': this.disabled
        }
      },
      styles () {
        return {
          transform: `translate3D(${this.leftPos}, -50%, 0)`
        }
      }
    },
    watch: {
      checked () {
        this.setPosition()
      },
      value (value) {
        this.changeState(value)
      }
    },
    methods: {
      setPosition () {
        this.leftPos = this.checked ? checkedPosition + '%' : initialPosition
      },
      changeState (checked, $event) {
        if (typeof $event !== 'undefined') {
          this.$emit('change', checked, $event)

          if (!$event.defaultPrevented) {
            this.checked = checked
          }
          this.$emit('input', this.checked, $event)
        } else {
          this.checked = checked
        }
      },
      toggle ($event) {
        if (!this.disabled) {
          this.changeState(!this.checked, $event)
        }
      }
    },
    mounted () {
      this.$nextTick(this.setPosition)
    }
  }
</script>
