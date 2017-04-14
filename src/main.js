import Vue from 'vue'
import App from './App.vue'

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
  ...App
})

app.$mount('#app')
