import ajax from './ajax'
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