export const state = () => ({
  filters: []
})

export const getters = {
  getPizza (state) {
    return state.filters.filter(item => item.filter_category_id === 1)
  }
}

export const mutations = {
  FETCH_LIST (state, payload) {
    state.filters = payload
  }
}

export const actions = {
  fetchList ({ commit, state }) {
    return new Promise((resolve, reject) => {
      if (!state.filters.length) {
        this.$axios.$get('/filters')
          .then(({ data }) => {
            commit('FETCH_LIST', data)
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      } else {
        resolve(state.filters)
      }
    })
  }
}
