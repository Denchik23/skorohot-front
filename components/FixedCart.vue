<template>
  <button
    class="fixed-cart"
    :class="{'fixed-cart_show': cart.length}"
    @click="$router.push('/cart')"
  >
    <span class="fixed-cart__basket basket">
      {{ cart.length }}
    </span>
  </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FixedCart',
  computed: {
    ...mapState({
      cart: state => state.cart.dishes
    })
  }
}
</script>

<style lang="scss">
.fixed-cart {
  display: block;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 4%;
  right: 12px;
  border: 0;
  background: #ed4b02;
  border-radius: 50%;
  z-index: 5;
  opacity: 0;
  transition: opacity 0.9s ease;
  &__basket {
    color: #fff;
    margin: 0 auto;
    font-weight: bold;
  }
  &_show {
    transition: opacity 0.9s ease;
    opacity: 1;
  }
}
</style>
