<template>
  <section :class="[$style.main,$style.fontRed]">
    <div class="container is-fluid is-marginless" :class="$style.content">
      <transition
        name="slide-fade">
        <router-view class="animated"></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    // console.log(this.$style)
  }
}
</script>

<style lang="scss" module>
@import "~scss/base.scss";
.main {
  padding: 52px 0;
  min-height: $min-height;
  background: $bg-color;
  transform: translate3d(0, 0, 0);
}
.font-red {
  // color: red;
}
.backgroud-red {
  // background: red;
}
.content {
  padding: 0;
}
</style>
