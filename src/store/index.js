//收集所有的vuex模块，一起暴露
import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules';

//声明vuex插件
Vue.use(Vuex)
const state = {}
const mutations = {}
const actions = {}
const getters = {}
//暴露store对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    //指定vuex管理子模块
    modules
})