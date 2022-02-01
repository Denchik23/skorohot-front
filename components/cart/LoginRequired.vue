<template>
  <section class="section-substrate">
    <div class="container">
      <div class="login-required shopping-basket">
        <div class="login-required__title section-title section-title_substrate">
          Для создания заказа <span>авторизуйтесь:</span>
        </div>
        <nuxt-link to="/login" class="button button_shadow">
          Авторизоваться
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginRequired'
}
</script>

<style lang="scss">
.login-required {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &__title {
    margin: 0 0 15px 0;
  }

  @include media-laptop {
    &__title {
      margin: 0 42px 0 0;
    }
  }
}
</style>
