export const getters = {}

export const mutations = {}

export const actions = {
  // eslint-disable-next-line no-empty-pattern
  getUserAddresses ({}) {
    return this.$axios.$get('/address')
  },

  // eslint-disable-next-line no-empty-pattern
  send ({}, payload) {
    return this.$axios.$post('/order', payload)
  }
}
