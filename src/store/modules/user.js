//管理用户数据的vuex模块

import {
    getUserTempId,
} from '@/utils'
import {
    reqRegister,
    reqLogout,
    reqLogin
} from '@/api'
import {
    saveUserInfo,
    getUserInfo,
    removeUserInfo
} from '@/utils'
export default {
    state: {
        userInfo: getUserInfo(),
        userTempId: getUserTempId()
    },
    mutations: {
        RECEIVE_USER_INFO(state, userInfo) {
            state.userInfo = userInfo
        },
        RESET_USER_INFO(state) {
            state.userInfo = {}
        }
    },
    actions: {
        //请求注册的接口，完成后不用更新state，只需要将请求的结果通知给组件
        async register({
            commit
        }, userInfo) {
            const result = await reqRegister(userInfo)
            if (result.code !== 200) {
                throw new Error(result.message || '注册失败')
            }
        },
        //请求登录成功后，保存返回的用户信息
        async login({
            commit
        }, {
            mobile,
            password
        }) {
            const result = await reqLogin(mobile, password)
            if (result.code === 200) {
                const userInfo = result.data
                commit('RECEIVE_USER_INFO', userInfo)
                //保存到location中
                saveUserInfo(userInfo)
            } else {
                throw new Error(result.message || '登录失败')
            }
        },
        //退出登录后
        async logout({
            commit
        }) {
            const result = await reqLogout()
            if (result.code === 200) {
                //删除state中的userInfo数据
                commit('RESET_USER_INFO')
                //删除location中的userInfo数据
                removeUserInfo()
            } else {
                throw new Error(result.message || '退出登录失败')
            }
        }
    },
    getters: {

    }
}