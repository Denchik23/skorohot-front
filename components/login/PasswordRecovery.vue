<template>
  <div class="auth__body">
    <template v-if="!checkCodeLayout">
      <div class="auth__title section-title section-title_substrate">
        Восстановление <span>пароля!</span>
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
          mask="+# (###) ###-##-##"
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
        label="Новый пароль"
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
          <button class="auth__forgot auth__back" @click="$emit('changeActionForm', 'LoginAuthorization')">
            Назад
          </button>
          <ui-base-button
            class="auth__button"
            title="Отправить"
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
        На номер телефона <strong>+{{ data.phone }}</strong> придет смс для подтверждения
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
import RegistrationFormMixin from '@/mixins/RegistrationFormMixin'

export default {
  name: 'PasswordRecovery',
  mixins: [
    RegistrationFormMixin
  ]
}
</script>

<style scoped>

</style>
