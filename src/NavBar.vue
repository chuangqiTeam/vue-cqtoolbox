<template>
  <div class="nav">
    <div class="container">
      <img class="is-hidden-tablet" src="~assets/img/nav-logo.png" alt="logo">
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="scss">
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media screen and (min-width: 1000px) {
  .container {
    margin: 0 auto;
    max-width: 840px;
  }
}
@media screen and (min-width: 1192px) {
  .container {
    max-width: 1008px;
  }
}
@media screen and (min-width: 1384px) {
  .container {
    max-width: 1176px;
  }
}
.nav{
  height: 52px;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 2;
  background: linear-gradient(270deg, #1486a2, #154163);
  .container{
    justify-content: center;
    height: 100%;
    img{
      margin-left: 50px;
      height: 24.5px;
      width: 126px;
    }
  }
}
</style>
