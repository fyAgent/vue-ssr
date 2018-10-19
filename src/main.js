import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'
import {createStore} from './store/index.js'
import { sync } from 'vuex-router-sync';
import plugin from "@/plugin";
Vue.config.productionTip = false
Vue.use(plugin)

export function createApp () {
  const router =createRouter()
  const store=createStore()
  sync(store, router)
  const app = new Vue({
    store,
    router,
    render:h=>h(App)
    // 根实例简单的渲染应用程序组件。
  })
  return { app,store,router }
}