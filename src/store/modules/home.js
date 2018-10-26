import axios from "axios";
import Vue from "vue";
export default {
    namespaced: true,
    // 重要信息：state 必须是一个函数，
    // 因此可以创建多个实例化该模块
    state: () => {
        items: {

        }
    },
    actions: {
        fetchItem: ({ commit }, params) => {
            return axios({
                method: 'post',
                url: "http://127.0.0.1:3000/list.do",
                data: params
            }).then(item => {
                commit('setItem', item.data.data)
            }).catch(err => {
                console.error(err)
            })


        }
    },
    mutations: {
        setItem(state, item) {
            Vue.set(state, "items", item)
        }
    }
}