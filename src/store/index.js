import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            items: {

            }
        },
        actions: {
            fetchItem({ commit }) {
                // `store.dispatch()` 会返回 Promise，
                // 以便我们能够知道数据在何时更新

                return axios("http://127.0.0.1:3000/list.do").then(item => {
                    console.log(item.data)
                    commit('setItem', item.data.data)

                }).catch(err => {
                    console.log("请求错误")
                    console.log(err)
                })
            }
        },
        mutations: {
            setItem(state, item) {
                Vue.set(state.items, "list", item)

            }
        }
    })

}