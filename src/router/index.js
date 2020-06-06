import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
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
export default new VueRouter({
    mode: 'history',
    routes
})