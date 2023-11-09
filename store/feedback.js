import { getCookie, prepareErrorMessage } from '@/utils/globalHelpers'

export const actions = {
  // eslint-disable-next-line no-empty-pattern
  send ({}, payload) {
    return new Promise((resolve, reject) => {
      new Promise((resolve, reject) => {
        const isXsrf = getCookie(document, 'XSRF-TOKEN')
        if (isXsrf !== undefined) {
          resolve()
        } else {
          this.$auth.request({
            withCredentials: true,
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            url: process.env.APP_API_AUNT_URL + '/sanctum/csrf-cookie'
          }, {
            maxRedirects: 0
          }).then(() => {
            resolve()
          }).catch((error) => {
            reject(error)
          })
        }
      }).then(() => {
        this.$axios.$post('/feedback', payload)
          .then((response) => {
            resolve(response)
          }).catch((error) => {
            reject(error)
          })
      }).catch((error) => {
        reject(prepareErrorMessage(error))
      })
    })
  }
}
