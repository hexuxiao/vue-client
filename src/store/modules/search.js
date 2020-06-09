
//search的vuex子模块
import {reqProductList} from '@/api'

const state = {
    //商品列表数据
    prodoctList:{}
}
const mutations = {
    //接受保存商品列表数据的mutation
    RECEIVE_PRODUCT_LIST(state,prodoctList){
        state.prodoctList = prodoctList
    }
}
const actions = {
    //请求获取商品列表数据的异步action
    async getProdoctList({commit},options){
        const result = await reqProductList(options)
        const prodoctList = result.data
        commit('RECEIVE_PRODUCT_LIST',prodoctList)
    }
}
const getters = {
    //属性列表
    attrsList(){
        return state.prodoctList.attrsList
    },
    //品牌列表
    trademarkList(){
        return state.prodoctList.trademarkList
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}