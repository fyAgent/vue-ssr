<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <h2>hahaha</h2> -->
    <span>以下是服务端渲染的数据</span>
    <ul>
      <li v-for="(val,key) in item" :key="key" @click="handleItemClick(val)">
        {{key}}:{{val}}
      </li>
    </ul>
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
  destoryed(to, from, next) {
    this.$store.unregisterModule("about");
  },
  // 避免在客户端重复注册模块。
};
</script>
