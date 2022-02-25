export const getters = {}

export const mutations = {}

export const actions = {
  // eslint-disable-next-line no-empty-pattern
  send ({}, payload) {
    return this.$axios.$post('/order', payload)
  },

  // eslint-disable-next-line no-empty-pattern
  getOrders ({}) {
    return this.$axios.$get('/order')
  }
}
