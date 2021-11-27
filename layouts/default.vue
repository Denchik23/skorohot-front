<template>
  <div class="lock">
    <div class="wrapper">
      <header-main />
      <nav-top />
      <Nuxt />
      <div class="footer-gradient"></div>
    </div>
    <footer-main />
  </div>
</template>

<script>
import HeaderMain from '~/layouts/HeaderMain'
import NavTop from '~/layouts/NavTop'
import FooterMain from '~/layouts/FooterMain'

export default {
  name: 'default',
  components: {
    HeaderMain,
    NavTop,
    FooterMain
  }
}
</script>
