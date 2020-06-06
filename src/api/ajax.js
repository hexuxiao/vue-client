//axios二次封装
import axios from 'axios'
//引入加载进度条
import Nprogress from 'nprogress'
const instance = axios.create({
    baseURL: '/api',
    // baseURL: 'http://182.92.128.115/api',
    timeout: 15000
})
//请求拦截器
axios.interceptors.request.use(config => {
    Nprogress.start()
    return config
})
//响应拦截器
axios.interceptors.response.use(
    response => {
        Nprogress.done()
        return response.data
    },
    error => {
        Nprogress.done()
        alert(error.message || '未知错误')
        // throw error
        return Promise.reject(error)
    }
)

export default instance