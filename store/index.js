// eslint-disable-next-line promise/param-names
// const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
  showMenu: false,
  categoriesList: []
})

export const getters = {
  getCategories (state) {
    return state.categoriesList.filter(item => item.published)
  }
}

export const mutations = {
  TOGGLE_MENU (state) {
    state.showMenu = !state.showMenu
  },
  SET_CATEGORIES_LIST (state, categories) {
    state.categoriesList = categories
  }
}

export const actions = {
  async getCategoriesList ({ commit, state }) {
    if (!state.categoriesList.length) {
      const category = await this.$axios.$get('/category')
      commit('SET_CATEGORIES_LIST', category)
    }
    return state.categoriesList
  }
}
