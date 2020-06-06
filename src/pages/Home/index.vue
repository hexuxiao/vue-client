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
    <Floor></Floor>

    <!--楼层-->
    <Floor></Floor>

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
export default {
  name: "Home",
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
