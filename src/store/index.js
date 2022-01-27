import Vue from "vue";
import Vuex from "vuex";
import {auth} from "./modules/auth"

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    auth,
  },

  state: {
    layout: 'default-layout',
  },

  getters: {
    getLayout(state) {
      return state.layout
    }
  },

  mutations: {
    setLayout(state, payload) {
      state.layout = payload
    }
  },

  actions: {},
  
});
