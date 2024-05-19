import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      console.log('vuex的mutations被触发')
      state.count++;
    },
  },
  actions: {},
  modules: {},
});