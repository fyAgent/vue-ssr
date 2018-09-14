import { createApp } from "./main"
const { app, router, store } = createApp()
if (window.__INITAIL_STATE_) {
    store.replaceState(window.__INITAIL_STATE_)
}

router.onReady(() => {
    app.$mount("#app")
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)
        let diffed = false
        const activited = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        })
        if (!activited.length) {
            return next()
        }
        // 这里如果有加载指示器(loading indicator)，就触发
        Promise.all(activated.map(c => {
            if (c.asyncData) {
                return c.asyncData({ store, route: to })
            }
        })).then(() => {

            // 停止加载指示器(loading indicator)

            next()
        }).catch(next)




    })
})















