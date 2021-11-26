<template>
  <div>
    <main class="section-substrate">
      <div class="container">
        <div class="auth">
          <div class="auth__form substrate">
            <div class="auth__choice form-item">
              <div class="radio-group">
                <div class="radio-group__item">
                  <input name="delivery" type="radio" id="delivery" checked="checked">
                  <label class="radio-group__button button" for="delivery">Вход</label>
                </div>
                <div class="radio-group__item">
                  <input name="delivery" type="radio" id="pickup">
                  <label class="radio-group__button button" for="pickup">Регистрация</label>
                </div>
              </div>
            </div>
            <div class="auth__body">
              <div class="auth__title section-title section-title_substrate">Добро <span>пожаловать!</span></div>
              <div class="form-item">
                <label class="form-item__label">Номер телефона <span class="required">*</span></label>
                <input type="text" class="base-input" placeholder="+7 989 776-18-71">
              </div>
              <div class="form-item">
                <label class="form-item__label">Пароль <span class="required">*</span></label>
                <input type="password" class="base-input" placeholder="Не менее 8 цифр">
              </div>
              <div class="form-item">
                <div class="auth__action">
                  <button class="auth__forgot">Забыли пароль?</button>
                  <button class="auth__button button">Войти</button>
                </div>
              </div>
              <div class="auth__social">
                <div>Или войти с помощью</div>
                <ul>
                  <li><a href="#"><img src="~/assets/img/vk-icon.svg" alt="vk-icon" width="41" height="41"></a></li>
                  <li><a href="#"><img src="~/assets/img/google-plus-icon.svg" alt="google-plus-icon" width="41" height="41"></a></li>
                  <li><a href="#"><img src="~/assets/img/apple-icon.svg" alt="apple-icon" width="41" height="41"></a></li>
                  <li><a href="#"><img src="~/assets/img/facebook-icon.svg" alt="facebook-icon" width="41" height="41"></a></li>
                  <li><a href="#"><img src="~/assets/img/telegram-icon.svg" alt="telegram-icon" width="41" height="41"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="auth__content">
            <div class="title">Аккаунт:<br><span class="title_green">его </span><span class="title_red">преимущества</span></div>
            <div class="intro">Стать частью семьи скорохот позволяет накапливать бонусы, которые можно потратить на частичную оплату заказа, сохранять адреса доставки, получать эксклюзивные предложения и акции, а также избавляет наших клиентов от ввода информации при оформлении заказа - <strong>заказывай в один клик!</strong></div>
            <div class="auth-advantages">
              <div class="auth-advantages__item">
                <img src="~/assets/img/present-icon.svg" alt="click-icon" class="auth-advantages__icon" width="80" height="80">
                <div class="auth-advantages__text">Можно оплатить часть заказа бонусами</div>
              </div>
              <div class="auth-advantages__item">
                <img src="~/assets/img/click-icon.svg" alt="click-icon" class="auth-advantages__icon" width="80" height="80">
                <div class="auth-advantages__text">Заказывайте в один клик</div>
              </div>
              <div class="auth-advantages__item">
                <img src="~/assets/img/free-icon-promotions.svg" alt="free-icon-promotions" class="auth-advantages__icon" width="80" height="80">
                <div class="auth-advantages__text">Эксклюзивные предложения и акции</div>
              </div>
              <div class="auth-advantages__item">
                <img src="~/assets/img/address-icon.svg" alt="address-icon" class="auth-advantages__icon" width="80" height="80">
                <div class="auth-advantages__text">Сохраняйте несколько адресов для удобства</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section>
      <div class="container">
        <div class="section-image">
          <img src="~/assets/img/cat.svg" alt="cat" width="620" height="990">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      await this.$auth.loginWith('laravelSanctum', {
        data: {
          email: 'it.denchik@yandex.ru',
          password: '123456789'
        }
      })

      this.$router.push('/')
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
      font-size: 40px;
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
