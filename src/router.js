import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export function createRouter() {
  const router = new Router({
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
  router.beforeEach((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);
    // 我们只关心非预渲染的组件
    // 所以我们对比它们，找出两个匹配列表的差异组件
    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c && prevMatched.length !== 0))
    })
    console.log(diffed)
    console.log(activated, !activated.length)
    next()
  })


  return router


}