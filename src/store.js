import { createStore } from 'vuex'

const mutations = {
    setSearchTerm(state, value) {
      state.searchTerm = value.toLowerCase()
    }
  },
  state = {
    searchTerm: null
  }

export default createStore({ mutations, state, strict: true })
