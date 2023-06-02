import { prepareErrorMessage } from '@/utils/globalHelpers'

export const getters = {}

export const mutations = {}

export const actions = {
  // eslint-disable-next-line no-empty-pattern
  send ({}, payload) {
    return new Promise((resolve, reject) => {
      const order = Object.assign({}, payload)
      if (order.delivery === 0) {
        delete order.address
      }
      this.$axios.$post('/order', order).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(prepareErrorMessage(error))
      })
    })
  },

  // eslint-disable-next-line no-empty-pattern
  getOrders ({}) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/order').then(({ data }) => {
        resolve(data)
      }).catch((error) => {
        reject(prepareErrorMessage(error))
      })
    })
  }
}
