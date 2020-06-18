import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'
// 缓存原型上的push函数
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 给原型对象上的push指定新函数函数
VueRouter.prototype.push = function (location, onComplete, onAbort) {
    if (!onComplete && !onAbort) {
        return originPush.call(this, location).catch(error => {
            console.log('---', error.message);
        })
    } else {
        originPush.call(this, location, onComplete, onAbort)
    }
}
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
    if (!onComplete && !onAbort) {
        return originReplace.call(this, location).catch(error => {
            console.log('---', error.message);
        })
    } else {
        originReplace.call(this, location, onComplete, onAbort)
    }
}

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes,
    //跳转后滚动条的位置
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    },
})
//全局路由守卫
//只有登录了，才可以跳转到结算，支付，订单页面
router.beforeEach((to, from, next) => {
    const checkPaths = ['/trade', '/pay', '/center']
    //目标路径
    const targetPath = to.path
    //目标路径是否在跳转路径中
    const flag = !!checkPaths.find(item => targetPath.indexOf(item) === 0)
    //判断路径是否需检查
    if (flag) {
        //需要检查 判断是否登录 登录之后才可以跳转
        const token = store.state.user.userInfo.token
        if (token) {
            next()
        } else {
            //没有登录 跳转到redirect query参数对应的目标路径，否则直接强制跳转到登录页面
            next('/login?redirect=' + targetPath)
        }
    } else {
        next()
    }
})
export default router