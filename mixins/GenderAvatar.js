export default {
  computed: {
    getGenderAvatar () {
      let avatar = '/unknown-svgrepo.svg'
      if (this.$auth.user.gender === 1) {
        avatar = '/boy-svgrepo.svg'
      } else if (this.$auth.user.gender === 0) {
        avatar = '/girl-svgrepo.svg'
      }
      return avatar
    }
  }
}
