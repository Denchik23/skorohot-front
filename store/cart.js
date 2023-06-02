// const sleep = m => new Promise(r => setTimeout(r, m))
// TODO вынести в утилиты
const findMax = (array, field) => {
  if (!array || array.lenght === 0) { return 1 }
  return Math.max(...array.map(o => o[field]), 0)
}

export const state = () => ({
  dishes: []
})

export const getters = {
  getTotal (state) {
    return state.dishes.reduce((sum, current) => {
      return sum + current.price * current.quantity
    }, 0)
  },
  getTotalWithSpaces (state, getters) {
    const total = getters.getTotal
    return total.toLocaleString()
  }
}

export const mutations = {
  ADD_DISH (state, { product, quantity }) {
    // if cart doesn't have product add it
    if (!state.dishes.find(dish => product.id === dish.id)) {
      state.dishes = [...state.dishes, {
        id: product.id,
        quantity,
        price: product.price,
        order: findMax(state.dishes, 'order') + 1
      }]
    }
  },
  REMOVE_DISH (state, dish) {
    state.dishes = Array.from(state.dishes.filter(item => item.id !== dish.id))
  },
  SET_DISH_QUANTITY (state, { product, quantity }) {
    state.dishes = [
      ...state.dishes.filter(dish => dish.id !== product.id),
      { ...state.dishes.find(dish => dish.id === product.id), quantity }
    ]
  },
  CLEAR (state) {
    state.dishes = []
  }
}

export const actions = {
  async addDish ({ commit, dispatch }, { product, quantity }) {
    await commit('ADD_DISH', { product, quantity })
  },
  async removeDish ({ commit, dispatch }, dish) {
    await commit('REMOVE_DISH', dish)
  },
  async setQuantityDish ({ commit, dispatch }, { product, quantity }) {
    await commit('SET_DISH_QUANTITY', { product, quantity })
  },
  clear ({ commit }) {
    commit('CLEAR')
  }
}
