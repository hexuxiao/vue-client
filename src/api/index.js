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
export const reqTodayRecommend = () => mockAjax('/todayRecommend')


//定义访问searchlist接口的函数
export const reqProductList = (options) => ajax.post('/list', options)
//定义访问detail接口的函数
export const reqDetail = (skuId) => ajax(`/item/${skuId}`)


//定义访问获取购物车列表接口的函数
export const reqShopCart = () => ajax.get('/cart/cartList')
//定义访问添加到购物车的接口的函数
export const reqAddToCart = (skuId, skuNum) => ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)
//定义访问切换某个购物车选中状态的接口的函数
export const reqCheakCartItem = (skuId, isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)
//定义访问删除购物项的接口的函数
export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)

//定义访问注册接口函数
export const reqRegister = (userInfo) => ajax.post('/user/passport/register/', userInfo)
//定义访问退出登录接口函数
export const reqLogout = () => ajax.get('/user/passport/logout')