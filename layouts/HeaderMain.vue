<template>
  <header class="header">
    <div class="container">
      <div class="header__body">
        <div class="logo">
          <div class="logo__img">
            <nuxt-link to="/">
              <img src="@/assets/img/logo.svg" alt="Скороход">
            </nuxt-link>
          </div>
          <div class="logo__city">
            Анапа
          </div>
        </div>
        <div class="header__address address">
          <span>ул. Омелькова, 21</span>
        </div>
        <div class="header__time">
          <span>ЕЖЕДНЕВНО</span><br>
          С 10:00 ДО 00:00
        </div>
        <a href="tel:+79180576767" class="header__phone">
          <img src="@/assets/img/phone-call.svg" alt="phone-call" width="64" height="64">
          <span>+7 (918) 057 67 67</span>
        </a>
        <div
          class="menu-burger"
          :class="{ 'menu-burger_open' : showMenu }"
          @click="toggleMenu"
        >
          <span />
        </div>
        <div class="mobile-menu" :class="{ 'mobile-menu_show' : showMenu }">
          <client-only>
            <div class="mobile-menu__body basket-body">
              <button class="basket-body__basket basket" @click="$router.push('/cart')">
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
              <NuxtLink v-show="!$auth.loggedIn" to="/login" class="button button_green basket-body__button">
                Войти
              </NuxtLink>
            </div>
          </client-only>
          <ul class="nav mobile-menu__links">
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
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import LogoutMixin from '~/mixins/LogoutMixin'

export default {
  name: 'HeaderMain',
  mixins: [LogoutMixin],
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      showMenu: state => state.showMenu
    }),
    ...mapGetters({
      total: 'cart/getTotalWithSpaces'
    })
  },
  methods: {
    ...mapActions({
      toggleMenu: 'toggleMenu'
    })
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1c1c1c;
    z-index: 2;
  }

  &__body {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }

  &__time {
    position: relative;
    z-index: 5;
    font-size: 10px;
    line-height: 15px;

    span {
      font-size: 13px;
      color: #3cd52e;
    }
  }

  &__address,
  &__phone {
    display: none;
  }

  @include media-mobile {
    &__phone {
      display: block;
      position: relative;
      z-index: 5;
    }

    &__phone {
      width: 30px;

      > span {
        display: none;
      }

      > img {
        display: block;
      }
    }
  }

  @include media-tablet {
    position: relative;
    top: unset;
    left: unset;

    &::before {
      background: linear-gradient(180deg, #000, rgba(255, 255, 255, 0) 100%);
    }

    &__body {
      height: auto;
      padding: 30px 0;
    }

    &__address {
      display: block;
      position: relative;
      z-index: 5;
    }
  }

  @include media-laptop {
    &__phone {
      width: auto;

      > span {
        display: block;
        color: #fff;
        font-weight: 500;
        font-size: 24px;
      }

      > img {
        display: none;
      }
    }
  }

  @include media-desktop {
    &__phone {
      > span {
        font-size: 36px;
      }
    }

    &__time {
      display: none;
    }

    &__body {
      padding: 45px 0 30px;
    }
  }
}

.logo {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;

  &__img img {
    max-width: 105px;
    display: block;
  }

  &__city {
    display: none;
    font-weight: 500;
    margin-left: 15px;
  }

  @include media-mobile {
    &__city {
      display: block;
    }
  }

  @include media-tablet {
    &__img img {
      max-width: 115px;
    }
  }

  @include media-laptop {
    &__img img {
      max-width: 150px;
    }

    &__city {
      font-size: 36px;
    }
  }

  @include media-desktop {
    &__img img {
      max-width: 100%;
    }

    &__city {
      margin-left: 58px;
    }
  }
}

.mobile-menu {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  padding: 90px 12px 0 12px;
  transition: all 0.3s ease 0s;
  overflow: auto;

  &__body {
    margin-bottom: 12px;
  }

  &__links {
    text-align: right;

    a {
      padding: 0 0 5px 18px;
      font-size: 22px;
      line-height: 42px;
    }
  }

  &.mobile-menu_show {
    top: 0;
  }
}

.menu-burger {
  position: relative;
  z-index: 5;
  width: 30px;
  height: 20px;

  > span {
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 2px;
    left: 0;
    top: 9px;
    transition: all 0.3s ease 0s;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 2px;
    left: 0;
    border-radius: 2px;
    transition: all 0.3s ease 0s;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  &.menu-burger_open::before {
    transform: rotate(45deg);
    top: 9px;
  }

  &.menu-burger_open::after {
    transform: rotate(-45deg);
    bottom: 9px;
  }

  &.menu-burger_open span {
    transform: scale(0);
  }
}

@include media-tablet {
  .mobile-menu,
  .menu-burger {
    display: none;
  }
}
</style>
