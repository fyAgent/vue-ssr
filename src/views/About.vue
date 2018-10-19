<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>以下是服务端渲染的数据</span>
    {{item}}
  </div>
</template>

<script>
import aboutStoreModule from "../store/modules/about";
export default {
  asyncData({ store }) {
    // 触发 action 后，会返回 Promise
    store.registerModule("about", aboutStoreModule);
    return store.dispatch("about/fetchItem");
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item() {
       return this.$store.state.about.items;
    }
  },
   // 避免在客户端重复注册模块。
  destroyed() {
    this.$store.unregisterModule("about");
  },

};
</script>
