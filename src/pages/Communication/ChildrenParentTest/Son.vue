<template>
  <div style="background: #ccc; height: 50px;">
    <h3>儿子小明: 有存款: {{money}}</h3>
    <button @click="giveMoney(50)">给BABA钱: 50</button>
  </div>
</template>

<script>
export default {
  name: "Son",
  data() {
    return {
      money: 30000
    };
  },

  methods: {
    changeMoney(count) {
      this.money -= count;
    },
    giveMoney(count){
      this.money -= count
      this.$parent.money += count
    }
  }
};
</script>
