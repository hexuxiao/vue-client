<template>
  <div>
    <h1>EventTest组件</h1>
    <button @click="test">原生事件button</button>
    <button @click="test($event)">原生事件button</button>
    <br />
    <br />
    <Event1 @click.native="test1">原生事件</Event1>
    <br />
    <br />
    <Event2 @click="test2" @xxx='test3($event)'></Event2>
  </div>
</template>

<script type="text/ecmascript-6">
import Event1 from "./Event1.vue";
import Event2 from "./Event2.vue";

export default {
  name: "EventTest",

  components: {
    Event1,
    Event2
  },

  methods: {
    test(event) {
      alert(event.target.innerHTML)
    },
    test1(event) {
      alert(event.target.innerHTML);
    },
    test2(data){
      alert(data)
    },
    test3(data){
      alert(data)
    }
  }
};
</script>
