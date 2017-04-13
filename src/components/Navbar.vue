<template lang="html">
<nav class="nav has-shadow" :class="{'scrolled': (!isHome || scrolled)}">
  <div class="container">
    <div class="nav-left">
      <router-link class="nav-item" to="/">
          <img class="is-hidden-mobile" src="~assets/img/nav-logo.png" alt="logo">
          <img class="is-hidden-tablet" src="~assets/img/nav-logo.png" alt="logo">
      </router-link>
    </div>
    <div class="nav-center">
      <router-link
          class="nav-item is-tab is-hidden-mobile"
          v-for="item in menus"
          :key="item.path"
          :to="`/${item.path}`"
          :class="{'is-active': item.path === activeMenu}">
        <i class="iconfont" :class="`icon-${item.icon}`"></i>{{item.name}}
      </router-link>
    </div>
    <span class="nav-toggle" v-if="false" :class="{'is-active': isShowMenu}" @click="showMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu" :class="{'is-active': isShowMenu}">
      <router-link
          class="nav-item is-tab is-hidden-tablet"
          v-for="item in menus"
          :key="item.path"
          :to="`/${item.path}`"
          :class="{'is-active': item.path === activeMenu}">
        <i class="iconfont" :class="`icon-${item.icon}`"></i>{{item.name}}
      </router-link>
      <a class="nav-item" @click="changeLang">
        {{lang === 'cn'? '中文': 'EN'}}
      </a>
      <a class="nav-item" v-if="false">
        <figure class="image logo" style="margin-right: 8px;">
          <img src="~assets/img/logo.png">
        </figure>
        {{string.common.logout}}
      </a>
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      isShowMenu: false,
      scrolled: false,
      menu: ['install', 'component', 'github']
    }
  },
  computed: {
    ...mapGetters([
      'string',
      'lang'
    ]),
    str () {
      return this.string.nav
    },
    isHome () {
      return this.$route.name === 'Home'
    },
    activeMenu () {
      if (this.$route.name == null) return ''
      return this.$route.name.toLocaleLowerCase()
    },
    menus () {
      return Array.from(this.menu, item => {
        return {
          name: this.str[item],
          icon: item,
          path: item
        }
      })
    }
  },
  methods: {
    ...mapActions([
      'fnChangeLang'
    ]),
    changeLang () {
      let lang = this.lang === 'cn' ? 'en' : 'cn'
      this.fnChangeLang(lang)
    },
    handleScroll () {
      this.scrolled = window.scrollY > 0
    },
    showMenu () {
      this.isShowMenu = !this.isShowMenu
    // },
    // changeMenu (item) {
    //   if (this.$route.path === `/${item.path}`) return
    //   this.$router.push(`/${item.path}`)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/base.scss";
.nav {
  &.has-shadow{
    box-shadow: none;
    position: fixed;
    width: 100%;
    transition: all .3s;
    background: transparent;
    &.scrolled{
      background: linear-gradient(270deg, #1486a2, #154163);
    }
  }
  .nav-item a, a.nav-item {
    color: $nav-default-color;
    &:hover{
      color: white;
      border-bottom-color: white;
      background: rgba(0,0,0,0.1);
    }
    &.is-active{
      border-bottom-color: $nav-default-color;
      color: white;
      &:hover{
        border-bottom-color: white;
      }
    }
  }
  .nav-toggle{
    background: white;
    &.is-active span{
      background-color: $default-color;
    }
  }
  .nav-right.nav-menu.is-active{
    background: $nav-bg-color;
    opacity: 0.92;
  }
}
.logo img{
  width: $logo-size;
  height: $logo-size;
  border-radius: 50%;
}
.is-hidden-tablet{
  max-height: 1.5rem;
}
</style>
