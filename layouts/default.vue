<template>
  <div>
    <div class="wrapper" :class="{'landing': $route.path === '/'}">
      <header-main />
      <nav-top />
      <Nuxt />
      <div class="footer-gradient"></div>
    </div>
    <footer-main />
    <modal-action />
  </div>
</template>

<script>
import HeaderMain from '~/layouts/HeaderMain'
import NavTop from '~/layouts/NavTop'
import FooterMain from '~/layouts/FooterMain'
import ModalAction from '~/components/modal/Action'

export default {
  name: 'default',
  components: {
    HeaderMain,
    NavTop,
    FooterMain,
    ModalAction
  }
}
</script>
