import { createApp } from "./main"
import { Promise } from "core-js";
import { resolve } from "uri-js";

export default context => {
    return new Promise((resolve, reject) => {
        const { app, store, router } = createApp()
        router.push(context.url)

        
        router.onReady(() => {
            const matchComponents = router.getMatchedComponents()//获取匹配到的组件
            if (!matchComponents.length) return reject({ code: 404 });//无法匹配到对应路由
            Promise.all(matchComponents.map(Component=>{
                if(Component.asyncData){
                    return Component.asyncData({
                        store,
                        route:router.currentRoute
                    })
                }
            })).then(()=>{
                context.state = store.state
            })   


            resolve(app)

        }, reject)

    })
}