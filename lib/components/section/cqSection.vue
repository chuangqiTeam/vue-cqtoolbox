<template>
  <div :class="[className]">
    <div class="cq-section-head">
      <span class="cq-section-tip"></span>
      <h2 class="cq-section-title">{{title}}</h2>
    </div>
    <div class="cq-section-content">
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

<style lang="scss">
.cq-section{
  background: white;
  margin: 10px 10px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  .cq-section-head{
    box-shadow: 0 1px 0px #f1f1f1;
    .cq-section-tip{
      width: 4px;
      height: 18px;
      margin-right: 6px;
      background-color: #00bcd4;
      display: inline-block;
    }
    .cq-section-title{
      display: inline-block;
    }
  }
  .cq-section-content{
    padding: 20px;
  }
}

</style>
