import {fetch} from "@/fetch";
import Vue from "vue";
export default {
    namespaced: true,
    // 重要信息：state 必须是一个函数，
    // 因此可以创建多个实例化该模块
    state: () => ({
        items: {

        }
    }),
    actions: {
        fetchItem: ({ commit },params) => {
            return fetch({

                url: "/list.do",
                data: params
            }).then(data => {
                commit('setItem', data)
            })
        }
    },
    mutations: {
        setItem(state, item) {
            Vue.set(state, "items", item)
        }
    }
}