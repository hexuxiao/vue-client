import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入store
import store from './store'
import TypeNav from './components/TypeNav'

Vue.config.productionTip = false
//注册全局组件
Vue.component('TypeNav', TypeNav)

new Vue({
  render: h => h(App),
  //配置路由器
  router,
  //注册store
  store
}).$mount('#app')
/* eslint-disable no-unused-vars */
var a = 3