<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <br />
    <HintButton title="添加" type="primary" icon="el-icon-plus" size="small" @click="add"></HintButton>
    &nbsp;
    &nbsp;
    <HintButton title="修改" type="warning" icon="el-icon-edit" size="small" @click="update"></HintButton>
    &nbsp;
    &nbsp;
    <HintButton title="删除" type="danger" icon="el-icon-delete" size="mini" @click="remove"></HintButton>
  </div>
</template>

<script type="text/ecmascript-6">
import HintButton from "./HintButton";
export default {
  name: "AttrsListenersTest",
  components: {
    HintButton
  },
  methods: {
    add() {
      alert("添加");
    },
    update() {
      alert("修改");
    },
    remove() {
      alert("删除");
    }
  }
};
</script>
