import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)

import VueCqtoolbox from '../lib'
Vue.use(VueCqtoolbox)
/* cq主题 primary: 'cyan', accent: 'pink' */
Vue.cqtool.registerTheme({
  default: {
    primary: 'cyan',
    warn: 'orange'
  }
})
const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')
