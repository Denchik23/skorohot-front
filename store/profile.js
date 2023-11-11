import { prepareErrorMessage } from '@/utils/globalHelpers'

export const getters = {}

export const mutations = {}

export const actions = {
  // eslint-disable-next-line no-empty-pattern
  async sendSMSCode ({}, payload) {
    await this.$auth.request({
      withCredentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      url: process.env.APP_API_AUNT_URL + '/sanctum/csrf-cookie'
    }, {
      maxRedirects: 0
    })
    return this.$axios.$post('/sms-code/send', {
      phone: payload.phone,
      password: payload.password
    })
  },

  // eslint-disable-next-line no-empty-pattern
  confirmSMSCode ({}, payload) {
    return this.$axios.$post('/sms-code/confirm', payload)
  },

  // eslint-disable-next-line no-empty-pattern
  saveData ({}, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$put('/profile/' + payload.id, payload).then(({ data }) => {
        resolve(data)
      }).catch((error) => {
        reject(prepareErrorMessage(error))
      })
    })
  },

  // eslint-disable-next-line no-empty-pattern
  getBonusDishes ({}) {
    return this.$axios.$get('/profile/dish')
  },

  // eslint-disable-next-line no-empty-pattern
  destroyProfile ({}, profileId) {
    return new Promise((resolve, reject) => {
      this.$axios.$delete('/profile/' + profileId).then(() => {
        resolve()
      }).catch((error) => {
        reject(prepareErrorMessage(error))
      })
    })
  }
}
