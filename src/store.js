import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      items: [1, 2, 3, 4]
    },
    mutations: {
      increment(state) {
        // 变更状态
        state.item.map(e=>{
          e+=1
        })
      }
    },
    actions: {

    }
  })

}