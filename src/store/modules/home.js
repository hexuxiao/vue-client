//管理首页数据的vuex子模块
//引入接口函数
import {
    reqCategorysList
} from '../../api'
export default {
    state: {
        categorysList: []
    },
    mutations: {
        RECEIVE_CATEGORY_LIST(state, categorysList) {
            state.categorysList = categorysList
        }
    },
    actions: {
        //发送请求获取分类列表
        async getCategorysList({
            commit
        }) {
            const result = await reqCategorysList()
            console.log(result)
            if (result.code === 200) {
                const categorysList = result.data.filter((item, index) => index < 15)
                commit('RECEIVE_CATEGORY_LIST', categorysList)
            }
        }
    },
    getters: {

    }
}