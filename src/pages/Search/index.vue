<template>
  <div>
    <TypeNav></TypeNav>
    <div>Search</div>
    <h2>keyword:{{$route.params.keyword}}</h2>
    <h2>content:{{$route.query.content}}</h2>
    <h2>content:{{keyword3}}</h2>
    <h2>content:{{keyword4}}</h2>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["keyword3", "keyword4"]
};
</script>

<style lang="less" scoped>
</style>
