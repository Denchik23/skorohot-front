// eslint-disable-next-line promise/param-names
// const sleep = m => new Promise(r => setTimeout(r, m))

import { prepareErrorMessage } from '@/utils/globalHelpers'

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
    return new Promise((resolve, reject) => {
      if (state.categoriesList.length) {
        resolve(state.categoriesList)
      } else {
        this.$axios.$get('/category').then(({ data }) => {
          commit('SET_CATEGORIES_LIST', data)
          resolve(data)
        }).catch((error) => {
          reject(prepareErrorMessage(error))
        })
      }
    })
  }
}
