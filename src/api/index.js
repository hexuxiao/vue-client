import ajax from './ajax'
import mockAjax from './mockAjax'
//定义接口请求函数

//登录接口
export function reqLogin(mobile, password) {
    // return ajax({
    //     url: '/user/passport/login',
    //     method: 'POST',
    //     data: {
    //         mobile,
    //         password
    //     }
    // })
    return ajax.post('/user/passport/login', {
        mobile,
        password
    })
}
//首页三级分类接口
// export function reqCategorys(){
//     return ajax('/product/getBaseCategoryList')
// }
export const reqCategorysList = () => ajax('/product/getBaseCategoryList')

//定义访问mock接口的函数
export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')
export const reqTodayRecommend = ()=>mockAjax('/todayRecommend')


//定义访问searchlist接口的函数
export const reqProductList = (options)=>ajax.post('/list',options)
//定义访问detail接口的函数
export const reqDetail = (skuId) =>ajax(`/item/${skuId}`)