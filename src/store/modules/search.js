//search的vuex子模块
import {
    reqProductList
} from '@/api'

const state = {
    //商品列表数据
    prodoctList: {}
}
const mutations = {
    //接受保存商品列表数据的mutation
    RECEIVE_PRODUCT_LIST(state, prodoctList) {
        state.prodoctList = prodoctList
    }
}
const actions = {
    //请求获取商品列表数据的异步action
    async getProdoctList({
        commit
    }, options) {
        //为了保留属性，浅拷贝options
        options = {
            ...options
        }
        //如果属性为空串或空数组，就不用请求参数
        Object.keys(options).forEach(key => {
            if (options[key] === '' || (Array.isArray(options[key]) && options[key].length === 0)) {
                delete options[key]
            }
        })
        const result = await reqProductList(options)
        if (result.code === 200) {
            const prodoctList = result.data
            commit('RECEIVE_PRODUCT_LIST', prodoctList)
        }

    }
}
const getters = {
    //属性列表
    attrsList() {
        return state.prodoctList.attrsList
    },
    //品牌列表
    trademarkList() {
        return state.prodoctList.trademarkList
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}