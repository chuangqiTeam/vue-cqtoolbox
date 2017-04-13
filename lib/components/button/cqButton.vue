<template>
  <button :class="[className, themeClass]" :type="type" :disabled="disabled" v-if="!href">
    <cq-ink-ripple :cq-disabled="disabled"></cq-ink-ripple>
    <slot></slot>
  </button>

  <a :class="[className, themeClass]" :href="href" :disabled="disabled" :target="target" :rel="newRel" v-else>
    <cq-ink-ripple :cq-disabled="disabled"></cq-ink-ripple>
    <slot></slot>
  </a>
</template>

<style lang="scss" src="./cqButton.scss"></style>

<script>
  import theme from '../../core/components/theme/mixin'
  import { BUTTON } from '../../identifiers'
  export default {
    props: {
      href: String,
      target: String,
      rel: String,
      type: {
        type: String,
        default: 'button'
      },
      disabled: Boolean
    },
    mixins: [theme],
    computed: {
      className () {
        return [BUTTON]
      },
      newRel () {
        if (this.target === '_blank') {
          return this.rel || 'noopener'
        }
        return this.rel
      }
    }
  }
</script>
