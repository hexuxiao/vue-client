<template>
  <div class="pagination">
    <button :disabled="myCurrentPage === 1" @click="setCurrentPage(myCurrentPage - 1)">上一页</button>
    <button v-if="startEnd.start > 1" @click="setCurrentPage(1)">1</button>
    <button v-if="startEnd.start > 2" disabled>···</button>

    <button
      v-for="item in startEnd.end"
      v-if="item >= startEnd.start"
      :class="{active:item === myCurrentPage}"
      @click="setCurrentPage(item)"
    >{{item}}</button>

    <button v-if="startEnd.end < totalPages - 1" disabled>···</button>
    <button v-if="startEnd.end < totalPages" @click="setCurrentPage(totalPages)">{{totalPages}}</button>
    <button :disabled="myCurrentPage === totalPages" @click="setCurrentPage(myCurrentPage + 1)">下一页</button>

    <button disabled style="margin-left: 30px">共 60 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    //当前页码
    currentPage: {
      type: Number,
      default: 1
    },
    //每页数量
    pageSize: {
      type: Number,
      default: 10
    },
    //总数量
    total: {
      type: Number,
      default: 0
    },
    //连续页码数
    showPageNo: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      myCurrentPage: this.currentPage
    };
  },
  watch: {
    //监视内部页码
    currentPage(value) {
      this.myCurrentPage = value;
    }
  },
  computed: {
    //总页数
    totalPages() {
      const { total, pageSize } = this;
      return Math.ceil(total / pageSize);
    },
    //连续页码数的 start end
    startEnd() {
      //myCurrentPage 当前页码  showPageNo  连续页码   totalPages 总页码
      let start, end;
      const { myCurrentPage, showPageNo, totalPages } = this;
      start = myCurrentPage - Math.floor(showPageNo / 2);
      if (start < 1) {
        start = 1;
      }
      end = start + showPageNo - 1;
      if (end > totalPages) {
        end = totalPages;
        start = end - showPageNo + 1;
        if (start < 1) {
          start = 1;
        }
      }
      return { start, end };
    }
  },
  methods: {
    //页数交互数据
    setCurrentPage(page) {
      if (page === this.myCurrentPage) return;
      //更新页码
      this.myCurrentPage = page;
      this.$emit("currentChange", page);
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
