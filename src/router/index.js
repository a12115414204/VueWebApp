import Vue from 'vue'
import Router from 'vue-router'
import VueResouce from 'vue-resource'
import shangpin from '@/components/routers/shangpin'
import pinglun from '@/components/routers/pinglun'
import shangjia from '@/components/routers/shangjia'
Vue.use(Router)
Vue.use(VueResouce)
export default new Router({
  routes: [
    {
     path: '/shangpin',
     name: 'shangpin',
     component: shangpin
    },
    {
      path: '/pinglun',
      name: 'pinglun',
      component: pinglun
     },
     {
      path: '/shangjia',
      name: 'shangjia',
      component: shangjia
     }
  ],
  linkActiveClass:'active'
})