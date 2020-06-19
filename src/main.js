import Vue from 'vue'
import 'swiper/css/swiper.min.css'
import App from './App.vue'
import router from './router'
//引入store
import store from './store'
import TypeNav from './components/TypeNav'
import Carousel from './components/carousel'
import Pagination from './components/Pagination'
import './validate' // 引入表单校验的配置模块
//引入所有api模块中暴露的函数，封装到API对象中
import * as API from './api'
import './element'

import VueLazyload from 'vue-lazyload'
import loading from './assets/images/loading.gif'

import './mock/mockServe'

Vue.config.productionTip = false
//注册全局组件
Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)

//将API对象保存到vue原型对象上,用于所有的组件对象都可以直接引用
Vue.prototype.$API = API

//使用懒加载组件
Vue.use(VueLazyload,{
  loading//配置loading图片
})


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