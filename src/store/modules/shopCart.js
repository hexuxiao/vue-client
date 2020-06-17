import {
    reqShopCart,
    reqAddToCart,
    reqCheakCartItem,
    reqDeleteCartItem
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
        } else {
            return undefined
        }
    },
    //切换某个选中状态
    async cheakCartItem({
        commit
    }, {
        skuId,
        isChecked
    }) {
        const result = await reqCheakCartItem(skuId, isChecked)
        if (result.code !== 200) {
            throw new Error(result.message || '选中失败')
        }
    },
    //切换全选状态
    async checkAllCartItems({
        commit,
        dispatch
    }, cheaked) {
        //cheaked是布尔值
        const isChecked = cheaked ? '1' : '0'
        let promises = []
        state.cartList.forEach(item => {
            //改变可选状态与全选状态不一致的
            if (item.isChecked !== isChecked) {
                //得到返回的promise对象
                const promise = dispatch('cheakCartItem', {
                    skuId: item.skuId,
                    isChecked
                })
                promises.push(promise)
            }
        })
        //只有全部的promise成功（cheakCartItem的isChecked状态和全选状态一致）才能成功
        return Promise.all(promises)
    },
    //删除某个选项
    async deleteItem({
        commit
    }, skuId) {
        const result = await reqDeleteCartItem(skuId)
        if (result.code !== 200) {
            throw new Error(result.message || '删除失败')
        }
    },
    //删除选中
    async deleteCheckedItems({
        commit,
        dispatch
    }) {
        const promises = await state.cartList.reduce((pre, item) => {
            if (item.isChecked == 1) {
                pre.push(dispatch('deleteItem', item.skuId))
            }
            return pre
        }, [])
        return Promise.all(promises)
    }
}
const getters = {
    //选中的总数量
    totalCount() {
        return state.cartList.reduce((pre, item) => pre + (item.isChecked === 1 ? item.skuNum : 0), 0)
    },
    //选中的总价格
    totalPrice() {
        return state.cartList.reduce((pre, item) => pre + (item.isChecked === 1 ? item.skuNum * item.cartPrice : 0), 0)
    },
    //是否选中
    isCheckAll() {
        return state.cartList.length > 0 && state.cartList.every(item => item.isChecked === 1)
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}