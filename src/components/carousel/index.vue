<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "Carousel",
  //声明接受属性数据
  props: {
    carouselList: Array, //轮播的数据
    autoplay: Boolean
  },
  watch: {
    //动态组件轮播要在数据改变以后才有效果
    // carouselList(value) {
    //   this.$nextTick(() => {
    //     this.initSwiper();
    //   });
    // }
    carouselList: {
      handler(value) {
        //如果初始没有数据，直接结束
        if (this.carouselList.length === 0) return;
        this.$nextTick(() => {
          this.initSwiper();
        });
      },
      // immediate: true //初始显示就会调用一次
    }
  },
  mounted(){
    if(this.carouselList.length > 0){
      this.initSwiper();
    }
  },
  methods: {
    //封装轮播
    initSwiper() {
      new Swiper(this.$refs.swiper, {
        // direction: "horizontal", // 水平切换
        loop: true, // 循环模式选项
        autoplay: this.autoplay,

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>
