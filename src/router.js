import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const home = () => import(/* webpackChunkName: "Home" */ './views/Home.vue');
const about = () => import(/* webpackChunkName: "about" */ './views/About.vue')
export function createRouter() {
  const router = new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        redirect: "/home"
      },
      {
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/about',
        name: 'about',
        component: about
      },
      {
        path: "*",
        component: home
      }
    ]
  })
  router.beforeEach((to, from, next) => {

    next()
  })


  return router


}