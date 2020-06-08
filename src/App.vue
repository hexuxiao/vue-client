<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from './components/Footer'
// import {reqCategorysList,reqFloors} from './api'
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  async mounted(){
    //测试接口数据
    // let result = await reqCategorysList()
    // console.log(result)
    //测试模拟接口数据
    // const result = await reqFloors()
    // console.log(result)
    //分发异步actions请求获取数据,路由切换是不会重新触发
    this.$store.dispatch('getCategorysList');
    
  }
};
</script>

<style lang="less" scoped>
</style>
