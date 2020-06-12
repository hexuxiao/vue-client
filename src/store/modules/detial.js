import {
    reqDetail
} from '@/api'
const state = {
    detailInfo: {}
}
const mutations = {
    RECEIVE_DETIAL_INFO(state, detailInfo) {
        state.detailInfo = detailInfo
    }
}
const actions = {
    async getdetailInfo({
        commit
    }, skuId) {
        const result = await reqDetail(skuId)
        if (result.code === 200) {
            const detailInfo = result.data
            commit('RECEIVE_DETIAL_INFO', detailInfo)
        }
    }
}
const getters = {
    categoryView(state) {
        return state.detailInfo.categoryView ? state.detailInfo.categoryView : {}
    },
    skuInfo(state){
        return state.detailInfo.skuInfo ? state.detailInfo.skuInfo : {}
    },
    skuImageList(state){
        const skuInfo = state.detailInfo.skuInfo
        return skuInfo ? skuInfo.skuImageList : {}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}