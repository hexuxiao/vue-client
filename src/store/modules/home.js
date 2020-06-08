//管理首页数据的vuex子模块
//引入接口函数
import {
    reqCategorysList,
    reqBanners,
    reqFloors
} from '../../api'
export default {
    state: {
        categorysList: [],
        banners: [],
        floors: []
    },
    mutations: {
        //接受保存分类列表的mutation
        RECEIVE_CATEGORY_LIST(state, categorysList) {
            state.categorysList = categorysList
        },
        //接受保存广告轮播列表的mutation
        RECEIVE_BANNERS(state, banners) {
            state.banners = banners
        },
        //接受保存楼层列表的mutation
        RECEIVE_FLOORS(state, floors) {
            state.floors = floors
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
        },
        //发送请求获取广告轮播
        async getBanners({
            commit
        }) {
            const result = await reqBanners()
            if (result.code === 200) {
                const banners = result.data
                commit('RECEIVE_BANNERS', banners)
            }
        },
        //发送请求获取广告轮播
        async getFloors({
            commit
        }) {
            const result = await reqFloors()
            if (result.code === 200) {
                const floors = result.data
                commit('RECEIVE_FLOORS', floors)
            }
        }
    },
    getters: {

    }
}