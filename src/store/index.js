import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import home from "@/store/modules/home";
Vue.use(Vuex)


export function createStore() {
    return new Vuex.Store({
        state: {
            items: {

            }
        },
        modules:{
            home: home
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