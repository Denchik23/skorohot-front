import { prepareErrorMessage } from '@/utils/globalHelpers'

export const state = () => ({
  reviews: []
})

export const getters = {}

export const mutations = {
  FETCH_LIST (state, payload) {
    state.reviews = payload
  },
  ADD_ADDRESS (state, payload) {
    state.reviews.push(payload)
  },
  EDIT_ADDRESS (state, payload) {
    state.reviews = [
      ...state.reviews.filter(address => address.id !== payload.id)
    ]
    state.reviews.push(payload)
  }
}

export const actions = {
  fetchList ({ commit, state }) {
    return new Promise((resolve, reject) => {
      if (state.reviews.length) {
        resolve(state.reviews)
      } else {
        this.$axios.$get('/reviews').then(({ data }) => {
          commit('FETCH_LIST', data)
          resolve(data)
        }).catch((error) => {
          reject(prepareErrorMessage(error))
        })
      }
    })
  }
}
