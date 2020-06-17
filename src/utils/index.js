//用户唯一标识id  临时id

import {
    v4 as uuidv4
} from 'uuid';


//暴露
export function getUserTempId() {
    //如果有id，localStorage中读取 保存到userTempId中
    let userTempId = localStorage.getItem('USER_TEMP_ID_KEY')
    //如果没有，则创建一个id，并保存到localStorage
    if (!userTempId) {
        userTempId = uuidv4()
        localStorage.setItem('USER_TEMP_ID_KEY', userTempId)
    }
    //返回userTempId
    return userTempId
}
//保存用户信息到location
export function saveUserInfo(userInfo) {
    window.localStorage.setItem('USER_INFO_KEY', JSON.stringify(userInfo))
}
//读取location中的信息
export function getUserInfo() {
    return JSON.parse(window.localStorage.getItem('USER_INFO_KEY')) || {}
}
//删除location中的信息
export function removeUserInfo() {
    window.localStorage.removeItem('USER_INFO_KEY')
}