<template>
  <div class="about">
    <h1>This is an home page</h1>
    <span>以下是服务端渲染的数据</span>
    <div class="item">{{item}}</div>
    <ul>
      <li v-for="(val,key) in item" :key="key" @click="handleItemClick(val)">
        {{key}}:{{val}}
      </li>
    </ul>
    <span>以下是客户端端渲染的数据</span>
    <ul>
      <li v-for="(val,key) in list" :key="key" @click="handleItemClick(val)">
        {{key}}:{{val}}
      </li>
    </ul>
  </div>
</template>

<script>
import homeStoreModule from "../store/modules/home";
import axios from "axios";
export default {
  asyncData({ store, route }) {
    store.registerModule("home", homeStoreModule);
    // 触发 action 后，会返回 Promise

    return store.dispatch("home/fetchItem", route.query);
  },
  data() {
    return {
      list: {}
    };
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
    
  },
  methods: {
    handleItemClick(name) {
      alert(name);
    }
  }
};
</script>
