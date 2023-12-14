<template>
  <div class="layout">
    <div class="wrapper" :class="{'landing': $route.path === '/'}">
      <header-main />
      <nav-top />
      <Nuxt />
      <div class="footer-gradient" />
    </div>
    <footer-main />
    <modal-action />
    <client-only>
      <fixed-cart v-if="$route.path !== '/cart'" />
      <script src="//cdn.callibri.ru/callibri.js" type="text/javascript" charset="utf-8"></script>
    </client-only>
  </div>
</template>

<script>
import HeaderMain from '~/layouts/HeaderMain'
import NavTop from '~/layouts/NavTop'
import FooterMain from '~/layouts/FooterMain'
import ModalAction from '~/components/modal/Action'
import FixedCart from '~/components/FixedCart'

export default {
  name: 'default',
  components: {
    HeaderMain,
    NavTop,
    FooterMain,
    ModalAction,
    FixedCart
  }
}
</script>

<style lang="scss">
.layout {
  position: relative;
}
</style>
