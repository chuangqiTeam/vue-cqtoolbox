<template>
  <i :class="[className, themeClass]" v-html="svgContent" v-if="svgContent"></i>

  <!-- <cq-image class="cq-icon" :class="[themeClass]" :cq-src="imageSrc" v-else-if="imageSrc"></cq-image> -->

  <i :class="[className, themeClass, cqIconset]" :aria-hidden="!!cqIconset" v-else>
    <slot></slot>
  </i>
</template>

<style lang="scss" src="./cqFontIcon.scss"></style>

<script>
  import theme from '../../core/components/theme/mixin'
  import { ICON } from '../../identifiers'
  let registeredIcons = {}

  export default {
    props: {
      cqSrc: String,
      cqIconset: {
        type: String,
        default: 'material-icons'
      }
    },
    computed: {
      className () {
        return [ICON]
      }
    },
    data: () => ({
      svgContent: null,
      imageSrc: null
    }),
    mixins: [theme],
    watch: {
      cqSrc () {
        this.svgContent = null
        this.imageSrc = null
        this.checkSrc()
      }
    },
    methods: {
      isImage (mimetype) {
        return mimetype.indexOf('image') >= 0
      },
      isSVG (mimetype) {
        return mimetype.indexOf('svg') >= 0
      },
      setSVGContent (value) {
        this.svgContent = value

        this.$nextTick(() => {
          this.$el.children[0].removeAttribute('fill')
        })
      },
      loadSVG () {
        if (!registeredIcons[this.cqSrc]) {
          const request = new XMLHttpRequest()
          const self = this

          request.open('GET', this.cqSrc, true)

          request.onload = function () {
            const mimetype = this.getResponseHeader('content-type')

            if (this.status >= 200 && this.status < 400 && self.isImage(mimetype)) {
              if (self.isSVG(mimetype)) {
                registeredIcons[self.cqSrc] = this.response
                self.setSVGContent(this.response)
              } else {
                self.loadImage()
              }
            } else {
              console.warn(`The file ${self.cqSrc} is not a valid image.`)
            }
          }

          request.send()
        } else {
          this.setSVGContent(registeredIcons[this.cqSrc])
        }
      },
      loadImage () {
        this.imageSrc = this.cqSrc
      },
      checkSrc () {
        if (this.cqSrc) {
          if (this.cqSrc.indexOf('.svg') >= 0) {
            this.loadSVG()
          } else {
            this.loadImage()
          }
        }
      }
    },
    mounted () {
      this.checkSrc()
    }
  }
</script>
