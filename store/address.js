import { prepareErrorMessage } from '@/utils/globalHelpers'

export const state = () => ({
  addresses: []
})

export const getters = {}

export const mutations = {
  FETCH_LIST (state, payload) {
    state.addresses = payload
  },
  ADD_ADDRESS (state, payload) {
    state.addresses.push(payload)
  },
  EDIT_ADDRESS (state, payload) {
    state.addresses = [
      ...state.addresses.filter(address => address.id !== payload.id)
    ]
    state.addresses.push(payload)
  }
}

export const actions = {
  fetchList ({ commit, state }) {
    return new Promise((resolve, reject) => {
      if (state.addresses.length) {
        resolve(state.addresses)
      } else {
        this.$axios.$get('/address').then(({ data }) => {
          commit('FETCH_LIST', data)
          resolve(data)
        }).catch((error) => {
          reject(prepareErrorMessage(error))
        })
      }
    })
  },

  store ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/address', payload)
        .then((response) => {
          commit('ADD_ADDRESS', response)
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  update ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$put('/address/' + payload.id, payload)
        .then((response) => {
          commit('EDIT_ADDRESS', response)
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
