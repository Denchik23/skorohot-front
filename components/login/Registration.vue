<template>
  <div class="auth__body">
    <template v-if="!checkCodeLayout">
      <div class="auth__title section-title section-title_substrate">
        Быстрая <span>регистрация!</span>
      </div>
      <ui-form-item
        label="Имя"
      >
        <input v-model="$v.data.name.$model" type="text" class="base-input" placeholder="Олег">
      </ui-form-item>
      <ui-form-item
        label="Номер телефона"
        :error="$v.data.phone.$error"
        required
      >
        <the-mask
          id="phone"
          ref="phone"
          v-model="$v.data.phone.$model"
          name="phone"
          mask="+7 (###) ###-##-##"
          class="base-input"
          placeholder="+7 (999) 888-77-55"
          type="tel"
        />
        <template #error>
          <small v-if="!$v.data.phone.required">Обязательное поле</small>
          <small v-if="!$v.data.phone.isPhone">Не корретный телефон</small>
        </template>
      </ui-form-item>
      <ui-form-item
        label="Пароль"
        required
        :error="$v.data.password.$error"
      >
        <input v-model="$v.data.password.$model" type="password" class="base-input" placeholder="Не менее 8 символов">
        <template #error>
          <small v-if="!$v.data.password.required">Обязательное поле</small>
          <small v-if="!$v.data.password.minLength">Минимальная длина 8 символов</small>
        </template>
      </ui-form-item>
      <ui-form-item
        label="Повторите пароль"
        required
        :error="$v.data.password_confirmation.$error"
      >
        <input v-model="$v.data.password_confirmation.$model" type="password" class="base-input" placeholder="Не менее 8 символов">
        <template #error>
          <small v-if="!$v.data.password_confirmation.required">Обязательное поле</small>
          <small v-if="!$v.data.password_confirmation.sameAsPassword">Пароли должны совпадать</small>
        </template>
      </ui-form-item>
      <ui-form-item>
        <div class="auth__action">
          <ui-base-button
            title="Регистрация"
            :error="errorButton"
            :loader="loaderButton"
            @click="sendSmsCode"
          />
        </div>
      </ui-form-item>
    </template>
    <template v-else>
      <div class="auth__title section-title section-title_substrate">
        Введите <span>4-х значный код</span>
      </div>
      <div class="intro">
        На номер телефона <strong>+7{{ data.phone }}</strong> придет смс для подтверждения
      </div>
      <ui-form-item
        label="Код"
        :error="$v.data.code.$error || isErrorText"
        required
      >
        <the-mask
          id="sms-code"
          ref="sms-code"
          v-model="$v.data.code.$model"
          name="sms-code"
          mask="####"
          class="base-input"
          type="text"
        />
        <template #error>
          <small v-if="!$v.data.code.required">Обязательное поле</small>
          <small v-if="isErrorText">{{ errorText }}</small>
        </template>
      </ui-form-item>
      <ui-form-item>
        <div class="auth__action">
          <button class="auth__forgot auth__back" @click="stepBack">
            Назад
          </button>
          <ui-base-button
            title="Подтвердить"
            class="auth__button-confirm"
            :error="errorButton"
            :loader="loaderButton"
            @click="confirm"
          />
        </div>
      </ui-form-item>
      <ui-form-item>
        <button v-if="!smsTimerShow" class="auth__forgot auth__repeat" @click="sendSmsCode">
          Получить SMS с кодом
        </button>
        <div v-else class="auth__intention intention">
          Вам отправлено SMS с кодом. Вы можете
          запросить код повторно через {{ timer }} сек.
        </div>
      </ui-form-item>
    </template>
  </div>
</template>

<script>
import RegistrationFormMixin from '~/mixins/RegistrationFormMixin'

export default {
  name: 'Registration',
  mixins: [
    RegistrationFormMixin
  ]
}
</script>

<style lang="scss">
.auth {
  .auth__back,
  .auth__button-confirm {
    width: 100%;
  }
  &__back {
    position: relative;
    padding: 0 0 0 70px;
    &:after {
      position: absolute;
      content: "";
      left: 0;
      top: 3px;
      width: 50px;
      height: 16px;
      background: url("~assets/img/vector-arrow.svg") no-repeat center;
    }
  }
  &__intention {
    color: #464646;
    // font-size: 16px;
    text-align: center;
  }
  .auth__repeat {
    width: auto;
    position: relative;
    padding: 0 0 0 38px;
    margin: 0 auto;
    display: block;
    &:after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 24px;
      height: 24px;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' class='sc-pckDb hBIdyw'%3E%3Cpath fill='%23333' fill-rule='evenodd' d='M6.843 7.257h2.121v1H5.136V4.43h1v2.12l.207-.207a8 8 0 1 1-2.33 6.098l.998-.055A7 7 0 1 0 7.05 7.05l-.208.207z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
    }
  }
  @include media-mobile {
    .auth__back {
      width: 38%;
    }
    .auth__button-confirm {
      width: 60%;
    }
  }
}
</style>
