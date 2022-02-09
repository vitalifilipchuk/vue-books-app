import axios from 'axios';

const prefix = "/books"

export const books = {
  state: {
    books: [],
    booksItem: {},
  },

  getters: {
    getBooks: state => {
      return state.books
    }
  },

  mutations: {
    SET_BOOKS: (state, payload) => {
      state.books = payload
    }
  },
  
  actions: {
    async fetchBooks({commit}) {
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