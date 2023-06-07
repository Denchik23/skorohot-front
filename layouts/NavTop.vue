<template>
  <div class="nav-top container">
    <div class="nav-top__menu">
      <ul class="nav nav-top__links">
        <li>
          <nuxt-link to="/" class="nav__link">
            Главная
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/catalog/pitstsa" class="nav__link">
            Меню
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/promotions" class="nav__link">
            Акции
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/o-nas" class="nav__link">
            О нас
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/delivery" class="nav__link">
            Доставка
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contacts" class="nav__link">
            Контакты
          </nuxt-link>
        </li>
      </ul>
    </div>
    <client-only>
      <div class="basket-body">
        <button class="nav-top__basket basket-body__basket basket" @click="$router.push('/cart')">
          {{ total }}
        </button>
        <div v-show="$auth.loggedIn" class="basket-aunt">
          <div class="avatar">
            <NuxtLink to="/profile">
              <img src="@/assets/img/avatar-user.png" alt="user avatar" width="62" height="62">
            </NuxtLink>
          </div>
          <button class="authorization" @click="logout" />
        </div>
        <NuxtLink v-show="!$auth.loggedIn" to="/login" class="nav-top__button basket-body__button button_green button">
          Войти
        </NuxtLink>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LogoutMixin from '~/mixins/LogoutMixin'

export default {
  name: 'NavTop',
  mixins: [LogoutMixin],
  computed: {
    ...mapGetters({
      total: 'cart/getTotalWithSpaces'
    })
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
