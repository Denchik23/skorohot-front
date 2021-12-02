export const getters = {}

export const mutations = {}

export const actions = {
  // eslint-disable-next-line no-empty-pattern
  sendSMSCode ({}, payload) {
    return this.$axios.$post('/sms-code/send', {
      phone: payload.phone,
      password: payload.password
    })
  },

  // eslint-disable-next-line no-empty-pattern
  confirmSMSCode ({}, payload) {
    return this.$axios.$post('/sms-code/confirm', payload)
  }
}
