import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from '@/components/index'

import novelSearch from '@/components/novel/search'
import novelIndex from '@/components/novel/index'

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/novel/search/:q',
    name: 'novelSearch',
    component: novelSearch
  }, {
    path: '/novel',
    name: 'novelIndex',
    component: novelIndex
  }]
})
