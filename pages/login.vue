<template>
  <button @click="login">Authorization</button>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      await this.$auth.loginWith('laravelSanctum', {
        data: {
          email: 'it.denchik@yandex.ru',
          password: '123456789'
        }
      })

      this.$router.push('/')
    }
  }
}
</script>
