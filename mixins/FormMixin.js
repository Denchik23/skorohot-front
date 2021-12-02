export default {
  data () {
    return {
      errorButton: false,
      loaderButton: false,
      data: null,
      defaultData: null
    }
  },
  validations () {
    return {}
  },
  methods: {
    formCleaning () {
      this.data = Object.assign({}, this.defaultData)
      this.$v.$reset()
    },
    beforeSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.errorButton = true
        setTimeout(() => {
          this.errorButton = false
        }, 600)
        return false
      }
      this.loaderButton = true
      return true
    },
    getResponseErrorMessage (response) {
      let errorText = 'Сервер не отвечает. Попробуйте ещё раз.'
      if (typeof response !== 'undefined' && typeof response.data.message !== 'undefined') {
        errorText = response.data.message
      }
      return errorText
    }
  },
  created () {
    this.formCleaning()
  }
}
