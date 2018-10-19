<template>
  <div class="about">
    <h1>This is an home page</h1>
    <span>以下是服务端渲染的数据</span>
    <div>{{item}}</div>
    <ul>
      <li v-for="(val,idx) in item" :key="idx" @click="handleItemClick(val.name)">
        {{val.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import homeStoreModule from "../store/modules/about";
export default {
  asyncData({ store, route }) {
    store.registerModule("home", homeStoreModule);
    // 触发 action 后，会返回 Promise
    return store.dispatch("fetchItem");
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item() {
      return this.$store.state.home.items;
    }
  },

  // 避免在客户端重复注册模块。
  destroyed() {
    this.$store.unregisterModule("home");
  },

  created() {
    console.log(this.item);
  },
  methods: {
    handleItemClick(name) {
      alert(name);
    }
  }
};
</script>
