<template>
  <div>
    <!-- 商品分类导航 -->
    <TypeNav></TypeNav>

    <!--列表-->
    <ListContainer></ListContainer>

    <!--今日推荐-->
    <TodayRecommend></TodayRecommend>

    <!-- 商品排行 -->
    <Rank></Rank>

    <!-- 猜你喜欢 -->
    <Like></Like>

    <!--楼层-->
    <Floor v-for="floor in floors" :key="floor.id" :floor='floor'></Floor>
    <!--商标-->
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import {mapState} from 'vuex'
export default {
  name: "Home",
  computed:{
    ...mapState({
      floors:state=>state.home.floors
    })
  },
  mounted() {
    //分发给异步action请求获取轮播图数据
    this.$store.dispatch('getBanners')
    //分发给异步action请求获取楼层数据
    this.$store.dispatch('getFloors')
  },
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  }
};
</script>

<style lang="less" scoped>
</style>
