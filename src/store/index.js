import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elements: [
      {id: 1, name: 'water', amount: 0},
      {id: 2, name: 'air', amount: 0},
      {id: 3, name: 'land', amount: 0},      
      {id: 4, name: 'fire', amount: 0}
    ]
  },
  mutations: {
    addElement(state, index) {
      state.elements[index].amount++;
    },

    quitElement(state, index) {
      state.elements[index].amount--;
    }
  },
  actions: {
  },
  modules: {
  }
})
