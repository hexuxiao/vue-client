<template>
  <ul>
    <li v-for="(item, index) in data" :key="index">
      <!-- {{item.text}} -->
      <slot :row="item" :$index="index"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    data: Array
  }
};
</script>