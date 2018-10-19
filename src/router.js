import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export function createRouter() {
  return new Router({
    base: "/",
    mode: "history",
    routes: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      },
      {
        path: '*',
        redirect: "/home"
      }
    ]
  })



}