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
    }
  },
  created () {
    this.formCleaning()
  }
}
