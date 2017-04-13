import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'views/Home'

Vue.use(Router)

import Mytest from 'views/Home/test'

export default new Router({
  mode: 'history', // history hash
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/component', name: 'Component', component: Mytest }
  ]
})
