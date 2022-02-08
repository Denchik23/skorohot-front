export const getters = {}

export const mutations = {}

export const actions = {
  // eslint-disable-next-line no-empty-pattern
  getDishesByCategory ({}, categoryId) {
    return this.$axios.$get('/category/' + categoryId)
  },

  // eslint-disable-next-line no-empty-pattern
  getDishes ({}, dishesId) {
    return this.$axios.$get('/dish', {
      params: {
        id: dishesId
      }
    })
  },

  // eslint-disable-next-line no-empty-pattern
  getDishesByAlias ({}, slug) {
    return this.$axios.$get('/dish/' + slug)
  },

  // eslint-disable-next-line no-empty-pattern
  getRecommendations ({}) {
    return this.$axios.$get('/recommendations')
  }
}
