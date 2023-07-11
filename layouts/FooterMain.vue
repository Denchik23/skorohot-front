<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__block">
        <div class="footer__left">
          <div class="footer__logo logo">
            <div class="logo__img">
              <a href="#" title="Скороход"><img src="@/assets/img/logo.svg" alt="Скороход"></a>
            </div>
            <div class="logo__city">
              Анапа
            </div>
            <div class="footer__address address">
              <span>ул. Омелькова, 21</span>
            </div>
            <a href="tel:+79180576767" class="footer__phone">+7 (918) 057 67 67</a>
          </div>
          <div class="footer__body">
            <div class="footer__social">
              <social-links />
            </div>
            <div class="footer__aunt">
              <button class="basket" @click="$router.push('/cart')" />
              <div v-if="$auth.loggedIn" class="basket-aunt">
                <div class="avatar">
                  <NuxtLink to="/profile">
                    <img :src="getGenderAvatar" alt="user avatar" width="150" height="150">
                  </NuxtLink>
                </div>
                <button class="authorization" @click="logout" />
              </div>
            </div>
            <div class="footer__menu">
              <ul>
                <li>
                  <NuxtLink to="/" class="footer__menu-item">
                    Главная
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/catalog/pitstsa" class="footer__menu-item">
                    Меню
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/catalog/kombo" class="footer__menu-item">
                    Акции
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/o-nas" class="footer__menu-item">
                    О нас
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/delivery" class="footer__menu-item">
                    Доставка
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contacts" class="footer__menu-item">
                    Контакты
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__body">
            <div class="footer__pay">
              <span>Мы принимаем:</span>
              <img src="@/assets/img/footer-pay.svg" alt="footer-pay" width="249" height="28">
            </div>
            <div class="footer__links">
              <a href="#">Обратная связь</a>
              <a href="#">Пользовательское соглашение</a>
              <a href="#">Политика конфиденциальности</a>
            </div>
            <div class="copyright">
              © {{ currentYear }} skorohot.ru – СКОРО-ХОТ
            </div>
          </div>
        </div>
        <a href="#" class="footer__scroll" @click.prevent="scrollTopSmooth">Вернуться к началу</a>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoutMixin from '~/mixins/LogoutMixin'
import GenderAvatar from '@/mixins/GenderAvatar'

export default {
  name: 'FooterMain',
  mixins: [LogoutMixin, GenderAvatar],
  data () {
    return {}
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  },
  methods: {
    scrollTopSmooth () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
.footer {
  background: linear-gradient(180deg, #1c1c1c 0%, #000 100%);
  padding: 30px 0;

  &__address {
    display: block;
  }

  &__scroll {
    display: none;
  }

  &__body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 20px;
  }

  &__social {
    width: 50%;

    a {
      display: inline-block;
      margin-right: 15px;

      :last-child {
        margin-right: 0;
      }
    }
  }

  &__aunt {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__menu {
    width: 100%;
    margin-top: 30px;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;

      > li {
        display: inline-block;
        margin-right: 30px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  &__menu-item {
    color: #fff;
    display: block;
    padding: 4px 0;
  }

  &__pay {
    width: 100%;
    text-align: center;

    > span {
      font-size: 16px;
      margin-bottom: 12px;
      display: block;
    }
  }

  &__links {
    margin-top: 30px;
    width: 100%;
    text-align: center;

    > a {
      color: #fff;
      display: block;
      padding: 4px 0;
    }
  }

  &__phone {
    display: none;
  }

  @include media-tablet {
    &__phone {
      display: block;
      color: #fff;
      font-weight: 500;
    }
  }

  @include media-laptop {
    &__block {
      display: flex;
      justify-content: space-between;
    }

    &__left {
      height: 100%;
      width: 95%;
    }

    &__scroll {
      width: 25px;
      display: block;
      writing-mode: vertical-lr;
      font-size: 16px;
      position: relative;
      font-weight: 300;
      color: #fff;
      padding-top: 53px;

      &::after {
        position: absolute;
        content: "";
        left: 8px;
        top: -30px;
        width: 8px;
        height: 65px;
        background: url("~assets/img/scroll-top.svg"), no-repeat, center;
      }
    }

    &__logo {
      justify-content: normal;
    }

    .footer__logo .logo__city {
      margin: 0 50px;
    }

    &__address {
      margin: 0 40px;
    }

    &__phone {
      font-size: 26px;
      margin-left: 30px;
    }

    &__body {
      justify-content: space-between;
      align-items: end;
    }

    &__social {
      width: auto;
      order: 0;
    }

    &__aunt {
      width: auto;
      justify-content: normal;
      order: 2;
    }

    &__menu {
      width: auto;
      margin-top: 0;
      order: 1;
    }

    &__pay {
      width: auto;
      text-align: left;
      order: 0;
    }

    &__links {
      width: auto;
      text-align: right;
      order: 2;
    }
  }

  @include media-desktop {
    &__body {
      margin-top: 30px;
    }

    &__phone {
      font-size: 36px;
    }

    &__menu-item {
      font-size: 24px;
    }
  }
}

.copyright {
  color: #fff;
  text-align: center;
  margin-top: 15px;
  font-size: 16px;
  order: 2;
  width: 100%;

  @include media-laptop {
    order: 1;
    width: auto;
  }
}
</style>
