// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//主要作用于当前的rem单位换算。
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 +"px";
      var deviceWidth = document.documentElement.clientWidth;
      if (deviceWidth > 750) {
        deviceWidth = 750;
      }
document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";

import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// 路由默认路径的跳转，在vue1.0版本的时候使用的是go的方法，2.0更改魏 push了
router.push('/shangpin')
