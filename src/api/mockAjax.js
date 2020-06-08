//axios二次封装
import axios from 'axios'
//引入加载进度条
import Nprogress from 'nprogress'
//1.配置通用的路径和超时
const instance = axios.create({
    baseURL: '/mock',
    // baseURL: 'http://182.92.128.115/api',
    timeout: 15000
})
//注册请求拦截器
instance.interceptors.request.use(config => {
    //2.显示加载进度条
    Nprogress.start()
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