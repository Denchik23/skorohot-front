import { prepareErrorMessage } from '@/utils/globalHelpers'

export const getters = {}

export const mutations = {}

export const actions = {
  // eslint-disable-next-line no-empty-pattern
  getDishesByCategory ({}, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/category/' + payload.categoryId,
        { params: { filter: payload.filter } }
      ).then(({ data }) => {
        resolve(data)
      }).catch((error) => {
        reject(prepareErrorMessage(error))
      })
    })
  },

  // eslint-disable-next-line no-empty-pattern
  getDishes ({}, dishesId) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/dish', {
        params: {
          id: dishesId
        }
      }).then(({ data }) => {
        resolve(data)
      }).catch((error) => {
        reject(prepareErrorMessage(error))
      })
    })
  },

  // eslint-disable-next-line no-empty-pattern
  getDishesByAlias ({}, slug) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/dish/' + slug).then(({ data }) => {
        resolve(data)
      }).catch((error) => {
        reject(prepareErrorMessage(error))
      })
    })
  },

  // eslint-disable-next-line no-empty-pattern
  getRecommendations ({}) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/recommendations').then(({ data }) => {
        resolve(data)
      }).catch((error) => {
        reject(prepareErrorMessage(error))
      })
    })
  }
}
