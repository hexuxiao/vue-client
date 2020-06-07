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
import {reqCategorysList} from './api'
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
  }
};
</script>

<style lang="less" scoped>
</style>
