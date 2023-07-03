<template>
  <div>
    <main class="section-substrate">
      <div class="container">
        <div class="auth">
          <div class="auth__form substrate">
            <ui-base-radio-group
              v-if="changeAction === 'LoginAuthorization' || changeAction === 'LoginRegistration'"
              v-model="changeAction"
              class="auth__choice"
              name="delivery"
              :options="auntOptions"
            />
            <component :is="changeAction" @changeActionForm="changeActionForm" />
          </div>
          <div class="auth__content">
            <div class="title">
              Аккаунт:<br><span class="title_green">его </span><span class="title_red">преимущества</span>
            </div>
            <div class="intro">
              Стать частью семьи скорохот позволяет накапливать бонусы, которые можно потратить на частичную оплату заказа, сохранять адреса доставки, получать эксклюзивные предложения и акции, а также избавляет наших клиентов от ввода информации при оформлении заказа - <strong>заказывай в один клик!</strong>
            </div>
            <div class="auth-advantages">
              <div class="auth-advantages__item">
                <img src="@/assets/img/present-icon.svg" alt="click-icon" class="auth-advantages__icon" width="80" height="80">
                <div class="auth-advantages__text">
                  Можно оплатить часть заказа бонусами
                </div>
              </div>
              <div class="auth-advantages__item">
                <img src="@/assets/img/click-icon.svg" alt="click-icon" class="auth-advantages__icon" width="80" height="80">
                <div class="auth-advantages__text">
                  Заказывайте в один клик
                </div>
              </div>
              <div class="auth-advantages__item">
                <img src="@/assets/img/free-icon-promotions.svg" alt="free-icon-promotions" class="auth-advantages__icon" width="80" height="80">
                <div class="auth-advantages__text">
                  Эксклюзивные предложения и акции
                </div>
              </div>
              <div class="auth-advantages__item">
                <img src="@/assets/img/address-icon.svg" alt="address-icon" class="auth-advantages__icon" width="80" height="80">
                <div class="auth-advantages__text">
                  Сохраняйте несколько адресов для удобства
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section>
      <div class="container">
        <div class="section-image">
          <img src="@/assets/img/cat.svg" alt="cat" width="620" height="990">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { auntOptions } from '@/vocabularies/deliveryOptions'

export default {
  name: 'Login',
  data () {
    return {
      auntOptions,
      changeAction: 'LoginAuthorization'
    }
  },
  created () {
    if (this.$auth.loggedIn) {
      this.$router.push('/profile')
    }
  },
  methods: {
    changeActionForm (form) {
      this.changeAction = form
    }
  }
}
</script>

<style lang="scss">
.auth {
  &__choice {
    margin: 15px 0 50px 0;
  }

  &__content {
    margin: 60px 0 0 0;
  }

  &__title {
    text-align: center;
  }

  &__body > .form-item:last-child {
    margin: 30px 0 0 0;
  }

  &__button,
  &__forgot {
    width: 100%;
  }

  &__forgot {
    border: none;
    background: unset;
    color: #fff;
    font-size: 18px;
    margin: 0 0 30px 0;
    text-align: left;
    font-weight: 300;
  }

  &__action {
    margin: 30px 0;
  }

  &__social {
    margin: 15px 0 0 0;

    > div {
      text-align: center;
      font-size: 16px;
      margin: 0 0 25px 0;
    }

    > ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: space-between;
    }
  }

  @include media-mobile {
    &__button,
    &__forgot {
      width: 49%;
    }

    &__body {
      max-width: 380px;
      margin: 0 auto;
    }
  }

  @include media-tablet {
    &__title {
      font-size: 35px;
    }
  }

  @include media-laptop {
    display: flex;
    justify-content: space-between;

    &__form,
    &__content {
      width: 48%;
    }

    &__content {
      margin: 0;
    }
  }
}

.auth-advantages {
  display: flex;
  flex-wrap: wrap;

  &__item {
    width: 100%;
    text-align: center;
    margin: 20px 0;
  }

  &__text {
    font-weight: bold;
  }

  @include media-mobile {
    &__item {
      display: flex;
      align-items: center;
      text-align: left;
    }

    &__icon {
      margin: 0 15px 0 0;
    }
  }

  @include media-tablet {
    margin: 0 -12px;

    &__item {
      width: 49%;
      padding: 0 12px;
      margin: 30px 0;
    }
  }
}

.section-image {
  text-align: center;
}
</style>
