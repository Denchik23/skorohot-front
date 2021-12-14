// eslint-disable-next-line promise/param-names
// const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
  showMenu: false,
  categoriesList: []
})

export const mutations = {
  TOGGLE_MENU (state) {
    state.showMenu = !state.showMenu
  },
  SET_CATEGORIES_LIST (state, categories) {
    state.categoriesList = categories
  }
}

export const actions = {
  getCategoriesList ({ commit, state }) {
    if (!state.categoriesList.length) {
      return new Promise((resolve, reject) => {
        this.$axios.$get('/category')
          .then((response) => {
            commit('SET_CATEGORIES_LIST', response)
            resolve(response)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    }
  }
}
