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
import { fetch } from "@/fetch";
// import home from "@/store/modules/home";
// import "@/assets/css/home.scss"; 这样引入暂时会报错  document not find  应该是在服务端操作dom了
export default {
  asyncData({ store, route }) {
    //服务端渲染
    // store.registerModule("home", home);

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
  created() {
    this.initData(); //发送一个客户端请求
  },

  methods: {
    handleItemClick(name) {
      alert(name);
    },
    initData() {
      fetch({
        url: "/list.do",
        data: this.$route.query
      }).then(data => {
        this.list = data;
      });
    }
  }
};
</script>

