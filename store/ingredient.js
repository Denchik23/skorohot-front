export const state = () => ({
  ingredients: [],
  searchIngredients: []
})

export const getters = {}

export const mutations = {
  FETCH_LIST (state, payload) {
    state.ingredients = payload.map((ingredient) => {
      ingredient.ingredients = ingredient.ingredients.map((item) => {
        item.selected = false
        return item
      })
      return ingredient
    })
  },
  ADD_INGREDIENT (state, { key, ingKey }) {
    state.searchIngredients.push(state.ingredients[key].ingredients[ingKey])
  },
  DELETE_INGREDIENT (state, ingredient) {
    state.searchIngredients = Array.from(state.searchIngredients.filter(item => item.id !== ingredient.id))
  },
  SELECTED_INGREDIENT (state, { key, ingKey }) {
    state.ingredients[key].ingredients[ingKey].selected = !state.ingredients[key].ingredients[ingKey].selected
  },
  CLEAR_INGREDIENT (state) {
    state.searchIngredients = []
  }
}

export const actions = {
  fetchList ({ commit, state }, force = false) {
    return new Promise((resolve, reject) => {
      if (!state.ingredients.length || force) {
        this.$axios.$get('/ingredients')
          .then((response) => {
            commit('FETCH_LIST', response)
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      } else {
        resolve(state.ingredients)
      }
    })
  },

  choiceSearchIngredient ({ commit, state }, { key, ingKey }) {
    const ingredient = state.ingredients[key].ingredients[ingKey]
    if (state.searchIngredients.includes(ingredient)) {
      commit('DELETE_INGREDIENT', ingredient)
    } else {
      commit('ADD_INGREDIENT', { key, ingKey })
    }
    commit('SELECTED_INGREDIENT', { key, ingKey })
  },

  clearSearchIngredient ({ commit, state }) {
    commit('FETCH_LIST', state.ingredients)
    commit('CLEAR_INGREDIENT')
  }
}
