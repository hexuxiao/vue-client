import Vue from 'vue'
import 'swiper/css/swiper.min.css'
import App from './App.vue'
import router from './router'
//引入store
import store from './store'
import TypeNav from './components/TypeNav'
import Carousel from './components/carousel'
 

import './mock/mockServe'

Vue.config.productionTip = false
//注册全局组件
Vue.component('TypeNav', TypeNav)
Vue.component('Carousel',Carousel)

new Vue({
  render: h => h(App),
  //配置路由器
  router,
  //注册store
  store,
  //全局事件总线对象
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
/* eslint-disable no-unused-vars */
var a = 3