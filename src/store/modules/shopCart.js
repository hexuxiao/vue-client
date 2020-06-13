import {
    reqShopCart,
    reqAddToCart
} from '@/api'
const state = {
    cartList: []
}
const mutations = {
    RECEIVE_CART_LIST(state, cartList) {
        state.cartList = cartList
    }
}
const actions = {
    //获取购物车列表
    async getCartList({
        commit
    }) {
        const result = await reqShopCart()
        if (result.code === 200) {
            const cartList = result.data
            commit('RECEIVE_CART_LIST', cartList)
        }
    },
    //添加到购物车
    async addToCart({
        commit
    }, {
        skuId,
        skuNum,
        callback
    }) {
        const result = await reqAddToCart(skuId, skuNum, callback)
        if (result.code === 200) {
            callback()
        } else {
            callback('添加购物车失败')
        }
    },
    //添加到购物车
    async addToCart2({
        commit
    }, {
        skuId,
        skuNum
    }) {
        const result = await reqAddToCart(skuId, skuNum)
        if (result.code !== 200) {
            throw new Error('添加购物车失败');
        }
    },
    //添加到购物车
    async addToCart3({
        commit
    }, {
        skuId,
        skuNum
    }) {
        const result = await reqAddToCart(skuId, skuNum)
        if (result.code !== 200) {
            return '添加购物车失败'
        }else{
            return undefined
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}