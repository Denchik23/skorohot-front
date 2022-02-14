export default {
  methods: {
    async logout () {
      await this.$auth.logout()
      await this.$router.push('/')
    }
  }
}
