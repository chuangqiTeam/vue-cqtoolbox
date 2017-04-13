<template>
  <div :class="[className, $style.main]">
    <div :class="$style.boxShadow">
      <span :class="[$style.tip, $style.inlineBlock]"></span>
      <h2 :class="$style.inlineBlock">{{title}}</h2>
    </div>
    <div :class="$style.padding_20">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { SECTION } from '../../identifiers'
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    className () {
      return [SECTION]
    }
  }
}
</script>

<style lang="scss" module>
.main{
  background: white;
  margin: 10px 10px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
}
.inline-block{
  display: inline-block;
}
.tip{
  width: 4px;
  height: 18px;
  margin-right: 6px;
  background-color: #00bcd4;
}
.box-shadow{
  box-shadow: 0 1px 0px #f1f1f1;
}
.padding_20{
  padding: 20px;
}
</style>
