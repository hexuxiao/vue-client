<template>
  <div>
    <div>Search</div>
    <h2>keyword:{{$route.params.keyword}}</h2>
    <h2>content:{{$route.query.content}}</h2>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style lang="less" scoped>
</style>
