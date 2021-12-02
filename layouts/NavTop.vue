<template>
  <div class="nav-top container">
    <div class="nav-top__menu">
      <ul class="nav nav-top__links">
        <li><a href="#" class="nav__link nav__link_active">Главная</a></li>
        <li><a href="#" class="nav__link">Меню</a></li>
        <li><a href="#" class="nav__link">Акции</a></li>
        <li><a href="#" class="nav__link">О нас</a></li>
        <li><a href="#" class="nav__link">Доставка</a></li>
        <li><a href="#" class="nav__link">Контакты</a></li>
      </ul>
    </div>
    <div class="basket-body">
      <button class="nav-top__basket basket-body__basket basket">10 500</button>
      <template v-if="$auth.loggedIn">
        <div class="avatar">
          <img src="~/assets/img/avatar-user.png" alt="user avatar" width="62" height="62">
        </div>
        <button class="authorization" @click="logout"></button>
      </template>
      <NuxtLink v-else to="/login" class="nav-top__button basket-body__button button_green button">Войти</NuxtLink>
    </div>
  </div>

</template>

<script>
export default {
  name: 'NavTop',
  methods: {
    async logout () {
      await this.$auth.logout()
      await this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.nav-top {
  display: none;

  @include media-tablet {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__links li {
      display: inline-block;
      margin-right: 8px;

      > a {
        padding: 0 5px 5px 5px;
        font-size: 16px;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .nav-top__basket {
      font-size: 22px;
    }

    .nav-top__button {
      font-size: 18px;
      margin-left: 30px;
    }
  }

  @include media-laptop {
    position: relative;
    z-index: 1;

    &__links li {
      margin-right: 8px;

      > a {
        font-size: 24px;
      }
    }
  }

  @include media-desktop {
    &__links li {
      margin-right: 40px;
    }

    .nav-top__button {
      margin-left: 98px;
    }
  }
}
</style>
