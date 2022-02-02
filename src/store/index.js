import Vue from "vue";
import Vuex from "vuex";
import {auth} from "./modules/auth"

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    auth: auth,
  },

  state: {
    layout: 'default-layout',
    ROUTES: {},
  },

  getters: {
    getLayout(state) {
      return state.layout
    },
    getRoutes(state) {
      return state.ROUTES
    }
  },

  mutations: {
    SET_LAYOUT(state, payload) {
      state.layout = payload
    },
    SET_ROUTES(state, payload) {
      state.ROUTES = payload
      console.log(state.ROUTES)
    }
  },

  actions: {},
  
});
