export default {
    namespaced: true,
    // 重要信息：state 必须是一个函数，
    // 因此可以创建多个实例化该模块
    state: () => {
        items: {

        }
    },
    actions: {
        fetchItem: ({ commit }) => {
            return axios("http://127.0.0.1:3000/list.do").then(item => {
                commit('setItem', item.data.data)
            }).catch(err => {
                console.log("请求错误")
                console.log(err)
            })
        }
    },
    mutations: {
        setItem(state, item) {
            Vue.set(state, "items", item)
        }
    }
}