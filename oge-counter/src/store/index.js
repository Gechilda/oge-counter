import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    reset(state) {
      state.count = 0
    },
    setValue(state, value) {
      state.count = value
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    decrement(context) {
      context.commit('decrement')
    },
    reset(context) {
      context.commit('reset')
    },
    setValue(context, value) {
      context.commit('setValue', value)
    }
  },
  getters: {
    count(state) {
      return state.count
    }
  }
})
