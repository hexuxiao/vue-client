<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="hideCategory" @mouseenter="showFirstCategory">
        <h2 class="all">全部商品分类</h2>
        <transition name="move">
          <div class="sort" v-show="isShowFirst">
            <div class="all-sort-list2" @click="toSearch2">
              <div
                class="item"
                :class="{item_on:index === currentIndex}"
                v-for="(c1,index) in categorysList"
                :key="c1.categoryId"
                @mouseenter="showCategory(index)"
              >
                <h3>
                  <!-- <a href="javascript:;">{{c1.categoryName}}</a> -->
                  <!-- 声明式 -->
                  <!-- <router-link
                  :to="`/search?categoryName=${c1.categoryName}&category1Id=${c1.categoryId}`"
                  >{{c1.categoryName}}</router-link>-->
                  <!-- 编程式 -->
                  <!-- <a
                  href="javascript:;"
                  @click="tosearch({categoryName:c1.categoryName,category1Id:c1.categoryId})"
                  >{{c1.categoryName}}</a>-->
                  <!-- 事件委派 -->
                  <a
                    href="javascript:;"
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                  >{{c1.categoryName}}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                      <dt>
                        <!-- <a href="javascript:;">{{c2.categoryName}}</a> -->
                        <!-- <router-link
                        :to="`/search?categoryName=${c2.categoryName}&category2Id=${c2.categoryId}`"
                        >{{c2.categoryName}}</router-link>-->
                        <!-- <a
                        href="javascript:;"
                        @click="tosearch({categoryName:c2.categoryName,category2Id:c2.categoryId})"
                        >{{c2.categoryName}}</a>-->
                        <a
                          href="javascript:;"
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                        >{{c2.categoryName}}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <!-- <a href="javascript:;">{{c3.categoryName}}</a> -->
                          <!-- <router-link
                          :to="`/search?categoryName=${c3.categoryName}&category3Id=${c3.categoryId}`"
                          >{{c3.categoryName}}</router-link>-->
                          <!-- <a
                          href="javascript:;"
                          @click="tosearch({categoryName:c3.categoryName,category3Id:c3.categoryId})"
                          >{{c3.categoryName}}</a>-->
                          <a
                            href="javascript:;"
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                          >{{c3.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import _ from 'lodash';
import throttle from "lodash/throttle";
import { mapState, mapActions } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      //解决快速移出显示子分类列表
      currentIndex: -2,
      //设置当前路由显示隐藏
      isShowFirst: this.$route.path === "/"
    };
  },
  //计算属性，取到数据
  computed: {
    // categorysList (){
    //   return  this.$store.state.home.categorysList
    // }
    ...mapState({
      categorysList: state => state.home.categorysList
    })
  },
  mounted() {
    // this.$store.dispatch('getCategorysList')
    //映射获取
    this.getCategorysList();
  },
  methods: {
    ...mapActions(["getCategorysList"]),
    //显示一级分类列表
    showFirstCategory() {
      this.isShowFirst = true;
      this.currentIndex = -1;
    },
    //显示子分类列表
    // showCategory(index) {
    //   this.currentIndex = index;
    // },
    //节流
    // showCategory: _.throttle(function(index) {
    showCategory: throttle(function(index) {
      if (this.currentIndex !== -2) {
        this.currentIndex = index;
      }
    }, 200),
    //隐藏子分类列表
    hideCategory() {
      this.currentIndex = -2;
      //如果当前不是首页，则隐藏一级分类列表
      if (this.$route.path !== "/") {
        this.isShowFirst = false;
      }
    },
    //跳转到search组件
    tosearch(categoryName, category1Id, category2Id, category3Id) {
      //设置参数
      const query = {
        categoryName
      };
      if (category1Id) {
        query.category1Id = category1Id;
      } else if (category2Id) {
        query.category2Id = category2Id;
      } else if (category3Id) {
        query.category3Id = category3Id;
      }
      const location = {
        name: "search",
        query
      };
      this.$router.push(location);
    },
    //事件委派处理跳转到search组件
    toSearch2(event) {
      //取出data自定义属性值
      const {
        categoryname,
        category1id,
        category2id,
        category3id
      } = event.target.dataset;
      //如果不是categoryname，直接结束,不会跳转
      if (!categoryname) return;
      //传参
      const query = {
        categoryName: categoryname
      };
      if (category1id) {
        query.category1Id = category1id;
      } else if (category2id) {
        query.category2Id = category2id;
      } else if (category3id) {
        query.category3Id = category3id;
      }
      const location = {
        name: "search",
        query
      };
      this.$router.push(location);
      //切换分类列表后，隐藏一级分类列表
      this.hideCategory();
    }
  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      &.move-enter-active {
        transition: all 0.3s;
      }
      &.move-enter,
      .move-leave-to {
        opacity: 0;
        height: 0;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: #ddd;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
