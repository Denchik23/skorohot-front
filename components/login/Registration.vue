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
        <input v-model="$v.data.password.$model" type="password" class="base-input" placeholder="Не менее 6 цифр">
        <template #error>
          <small v-if="!$v.data.password.required">Обязательное поле</small>
          <small v-if="!$v.data.password.minLength">Минимальная длина 6 символов</small>
        </template>
      </ui-form-item>
      <ui-form-item
        label="Повторите пароль"
        required
        :error="$v.data.password_confirmation.$error"
      >
        <input v-model="$v.data.password_confirmation.$model" type="password" class="base-input" placeholder="Не менее 6 цифр">
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
      <div class="intro">На номер телефона <strong>+7{{ data.phone }}</strong> придет смс для подтверждения</div>
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
    </template>
  </div>
</template>

<script>
import { required, minLength, sameAs, requiredIf } from 'vuelidate/lib/validators'
import { TheMask } from 'vue-the-mask'
import { isPhone } from '~/utils/validationUtils'
import ModalMixin from '~/mixins/ModalMixin'
import FormMixin from '~/mixins/FormMixin'

export default {
  name: 'Registration',
  components: {
    TheMask
  },
  mixins: [
    FormMixin,
    ModalMixin
  ],
  data () {
    return {
      checkCodeLayout: false,
      errorText: '',
      isErrorText: false,
      defaultData: {
        name: '',
        phone: '',
        password: '',
        password_confirmation: '',
        code: ''
      }
    }
  },
  validations () {
    return {
      data: {
        name: {
        },
        phone: {
          required,
          isPhone
        },
        password: {
          required,
          minLength: minLength(6)
        },
        password_confirmation: {
          required,
          sameAsPassword: sameAs('password')
        },
        code: {
          required: requiredIf(() => this.checkCodeLayout)
        }
      }
    }
  },
  methods: {
    stepBack () {
      this.checkCodeLayout = false
      this.isErrorText = false
      this.errorText = ''
    },
    sendSmsCode () {
      if (!this.beforeSubmit()) {
        return
      }
      this.$store.dispatch('profile/sendSMSCode', this.data)
        .finally(() => {
          this.loaderButton = false
        })
        .then((response) => {
          if (typeof response.success !== 'undefined' && response.success) {
            this.checkCodeLayout = true
          }
        }).catch((error) => {
          this.showModalError(this.getResponseErrorMessage(error.response))
        })
    },
    confirm () {
      if (!this.beforeSubmit()) {
        return
      }
      this.$store.dispatch('profile/confirmSMSCode', this.data)
        .finally(() => {
          this.loaderButton = false
        })
        .then((response) => {
          if (typeof response.success !== 'undefined' && response.success) {
            this.$auth.loginWith('laravelSanctum', {
              data: this.data
            }).then(() => {
              this.$router.push('/profile')
            }).catch((error) => {
              this.showModalError(this.getResponseErrorMessage(error.response))
            })
          } else {
            this.isErrorText = true
            this.errorText = response.message
          }
        }).catch((error) => {
          this.showModalError(this.getResponseErrorMessage(error.response))
        })
    }
  }
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
