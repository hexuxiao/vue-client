import {
    reqTradeInfo,
    reqPayInfo
} from '@/api'

export default {
    state: {
        trandeInfo: {}, //交易信息对象
        payInfo: {} //支付信息对象
    },
    mutations: {
        RECEIVE_TRANDE_INFO(state, {
            trandeInfo
        }) {
            state.trandeInfo = trandeInfo
        },
        RECEIVE_PAY_INFO(state, {
            payInfo
        }) {
            state.payInfo = payInfo
        }
    },
    actions: {
        async getTrandeInfo({
            commit
        }) {
            const result = await reqTradeInfo()
            if (result.code === 200) {
                const trandeInfo = result.data
                commit('RECEIVE_TRANDE_INFO', {
                    trandeInfo
                })
            }
        },
        async getPayInfo({
            commit
        }, orderId) {
            const result = await reqPayInfo(orderId)
            if (result.code === 200) {
                const payInfo = result.data
                commit('RECEIVE_PAY_INFO', {
                    payInfo
                })
            }
        }
    },
    getters: {

    }
}