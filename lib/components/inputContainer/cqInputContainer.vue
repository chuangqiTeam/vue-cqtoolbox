<template>
  <div :class="[className, themeClass, classes]">
    <slot></slot>

    <span class="cq-count" v-if="enableCounter">{{ inputLength }} / {{ counterLength }}</span>

    <cq-button class="cq-icon-button cq-toggle-password" @click.native="togglePasswordType" v-if="cqHasPassword">
      <cq-icon>{{ showPassword ? 'visibility_off' : 'visibility' }}</cq-icon>
    </cq-button>
  </div>
</template>

<style lang="scss" src="./cqInputContainer.scss"></style>

<script>
  import theme from '../../core/components/theme/mixin'
  import isArray from '../../core/utils/isArray'
  import { INPUT_CONTAINER } from '../../identifiers'
  export default {
    props: {
      cqInline: Boolean,
      cqHasPassword: Boolean
    },
    mixins: [theme],
    data () {
      return {
        value: '',
        input: false,
        showPassword: false,
        enableCounter: false,
        hasSelect: false,
        hasPlaceholder: false,
        hasFile: false,
        isDisabled: false,
        isRequired: false,
        isFocused: false,
        counterLength: 0,
        inputLength: 0
      }
    },
    computed: {
      className () {
        return [INPUT_CONTAINER]
      },
      hasValue () {
        if (isArray(this.value)) {
          return this.value.length > 0
        }

        return Boolean(this.value)
      },
      classes () {
        return {
          'cq-input-inline': this.cqInline,
          'cq-has-password': this.cqHasPassword,
          'cq-has-select': this.hasSelect,
          'cq-has-file': this.hasFile,
          'cq-has-value': this.hasValue,
          'cq-input-placeholder': this.hasPlaceholder,
          'cq-input-disabled': this.isDisabled,
          'cq-input-required': this.isRequired,
          'cq-input-focused': this.isFocused
        }
      }
    },
    methods: {
      isInput () {
        return this.input && this.input.tagName.toLowerCase() === 'input'
      },
      togglePasswordType () {
        if (this.isInput()) {
          if (this.input.type === 'password') {
            this.input.type = 'text'
            this.showPassword = true
          } else {
            this.input.type = 'password'
            this.showPassword = false
          }

          this.input.focus()
        }
      },
      setValue (value) {
        this.value = value
      }
    },
    mounted () {
      this.input = this.$el.querySelectorAll('input, textarea, select, .cq-file')[0]

      if (!this.input) {
        this.$destroy()

        throw new Error('Missing input/select/textarea inside cq-input-container')
      }
    }
  }
</script>
