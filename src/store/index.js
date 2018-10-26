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
        
        },
        mutations: {
            setItem(state, item) {
                Vue.set(state.items, "list", item)

            }
        }
    })

}