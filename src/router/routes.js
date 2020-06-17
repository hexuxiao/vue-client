import Home from '../pages/Home'
import Search from '../pages/Search'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Detail from '../pages/Detail'
import AddCardSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
import MyOrder from '../pages/Center/MyOrder'
import CroupBuy from '../pages/Center/CroupBuy'
import store from '../store'
export default [{
        path: '/',
        component: Home
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        props: route => ({
            keyword3: route.params.keyword,
            keyword4: route.query.content
        })
    },
    {
        path: '/register',
        component: Register,
        meta: {
            isHideFooter: true
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            isHideFooter: true
        },
        //已经登录就没法在跳转到登录界面，强制跳转到主页
        //路由独享的守卫
        // beforeEnter: (to, from, next) => {
        //     const token  = store.state.user.userInfo.token
        //     if(token){
        //         next('/')
        //     }else{
        //         next()
        //     }
        // }
    },
    {
        path: '/detail/:id',
        component: Detail
    },
    {
        path: '/addcartsuccess',
        component: AddCardSuccess,
        //只有携带了skuNum和sessionStorange中的skuInfo数据，才能查看添加购物车成功的界面
        beforeEnter: (to, from, next) => {
            const skuNum = to.query.skuNum
            const sukInfo = JSON.parse(window.sessionStorage.getItem("SKU_INFO_KEY"));
            if (skuNum && sukInfo instanceof Object) {
                next()
            } else {
                next('/shopcart')
            }
        }
    },
    {
        path: '/shopcart',
        component: ShopCart,
    },
    {
        path: '/trade',
        component: Trade,
        //只能从购物车跳转到交易页面
        beforeEnter: (to, from, next) => {
            if (from.path === '/shopcart') {
                next()
            } else {
                ///否则强制跳转到购物车页面
                next('/shopcart')
            }
        }
    },
    {
        path: '/pay',
        component: Pay,
        //只能从交易页面跳转到支付页面
        beforeEnter: (to, from, next) => {
            if (from.path === '/trade') {
                next()
            } else {
                next('/trade')
            }
        }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        //只能从支付页面跳转到支付成功页面
        beforeEnter: (to, from, next) => {
            if (from.path === '/pay') {
                next()
            } else {
                next('/pay')
            }
        }
    },
    {
        path: '/center',
        component: Center,
        children: [{
                path: '/center/myorder',
                component: MyOrder
            },
            {
                path: 'croupbuy',
                component: CroupBuy
            },
            {
                //自动跳转的路由
                path: '',
                redirect: '/center/myorder'
            }
        ]
    }

]