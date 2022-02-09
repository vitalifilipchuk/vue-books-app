import axios from 'axios';

const prefix = "/news"

export const news = {
  state: {
    news: [],
    newsItem: {},
  },

  getters: {
    getNews: state => {
      return state.news
    }
  },

  mutations: {
    SET_NEWS: (state, payload) => {
      state.news = payload
    }
  },
  
  actions: {
    async fetchNews({commit}) {
      try {
        return await axios.get(`${prefix}`).then((response => {
          commit('SET_NEWS', response.data)
        }))
      } catch (e) {
        return e
      }
    }
  }
}