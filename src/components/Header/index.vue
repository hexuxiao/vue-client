<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p v-if="userInfo.token">
            <span>{{userInfo.nickName}}</span> &nbsp;&nbsp;
            <a href="javascript:;" @click="removeLogout">退出</a>
          </p>
          <p v-else>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <!-- <a href="###"></a> -->
          <router-link to='/center/myorder'>我的订单</router-link>
          <!-- <a href="###">我的购物车</a> -->
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/" class="logo" title="尚品汇">
          <img src="./images/logo.png" alt />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="/xxx" class="searchForm" @submit.prevent="search">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword" />
          <!-- <button class="sui-btn btn-xlarge btn-danger" @click.prevent="search">搜索</button> -->
          <button class="sui-btn btn-xlarge btn-danger">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: ""
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo;
    }
  },
  mounted() {
    this.$bus.$on("removeKeyword", () => {
      this.keyword = "";
    });
    console.log("haha", this.$store.state.user.userInfo);
  },
  methods: {
    //退出登录
    removeLogout() {
      alert("确定退出么？");
      this.$store.dispatch("logout");
      this.$router.replace("/login");
    },
    search() {
      const { keyword } = this;
      // this.$router.push(`/search/${keyword}?content=${keyword.toUpperCase()}`);
      // this.$router.push({name:'search',params:{keyword},query:{content:keyword.toUpperCase()}},()=>{})
      const location = {
        name: "search"
      };
      if (keyword) {
        location.params = { keyword };
      }
      //搜索跳转携带query参数
      location.query = this.$route.query;
      //直接返回home
      // if(this.$route.name !== 'search'){
      if (this.$route.path.indexOf("/search") !== 0) {
        this.$router.push(location);
      } else {
        this.$router.replace(location);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
