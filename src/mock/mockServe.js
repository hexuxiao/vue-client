//使用mockjs模拟接口
import Mock from 'mockjs'
import banners from './banners.json'
import floors from './floors.json'
import todayRecommend from './todayRecommend.json'
//模拟返回banners数据接口
Mock.mock('/mock/banners', {
    code: 200,
    data: banners
})
//模拟返回floors数据接口
Mock.mock('/mock/floors', {
    code: 200,
    data: floors
})
//模拟返回todayRecommend数据接口
Mock.mock('/mock/todayRecommend', {
    code: 200,
    data: todayRecommend
})