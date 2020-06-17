//axios二次封装
import axios from 'axios'
//引入加载进度条
import Nprogress from 'nprogress'
import store from '@/store'
//1.配置通用的路径和超时
const instance = axios.create({
    //基础路径
    baseURL: '/api',
    // baseURL: 'http://182.92.128.115/api',
    //延迟时间
    timeout: 15000
})
//注册请求拦截器
instance.interceptors.request.use(config => {
    //2.显示加载进度条
    Nprogress.start()
    //5.每个请求自动携带userTempId的请求头: 在请求拦截器中实现
    config.headers['userTempId'] = store.state.user.userTempId
    //登陆后每个请求自带token的请求头
    const token = store.state.user.userInfo.token
    if (token) {
        config.headers['token'] = token
    }
    return config
})
//注册响应拦截器
instance.interceptors.response.use(
    response => {
        //3.返回响应体数据
        Nprogress.done()
        return response.data
    },
    error => {
        Nprogress.done()
        //4.统一处理请求错误
        alert(error.message || '未知错误')
        // throw error
        return Promise.reject(error)
    }
)
export default instance