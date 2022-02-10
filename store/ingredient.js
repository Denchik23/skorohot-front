export const state = () => ({
  ingredients: [],
  categories: []
})

export const getters = {}

export const mutations = {
  FETCH_LIST (state, { payload, dataType }) {
    state[dataType] = payload
  }
}

export const actions = {
  fetchList ({ commit, state }, dataType) {
    return new Promise((resolve, reject) => {
      if (!state[dataType].length) {
        const url = dataType === 'categories' ? '/ingredients/categories' : '/ingredients'
        console.log(url)
        this.$axios.$get(url)
          .then((response) => {
            commit('FETCH_LIST', { payload: response, dataType })
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      } else {
        resolve(state[dataType])
      }
    })
  }
}
