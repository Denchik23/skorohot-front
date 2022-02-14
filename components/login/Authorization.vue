<template>
  <div class="auth__body">
    <div class="auth__title section-title section-title_substrate">
      Добро <span>пожаловать!</span>
    </div>
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
      <input v-model="$v.data.password.$model" type="password" class="base-input" placeholder="Не менее 8 цифр">
      <template #error>
        <small v-if="!$v.data.password.required">Обязательное поле</small>
        <small v-if="!$v.data.password.minLength">Минимальная длина 8 символов</small>
      </template>
    </ui-form-item>
    <ui-form-item>
      <div class="auth__action">
        <button
          class="auth__forgot"
          @click="$emit('passwordRecovery')"
        >
          Забыли пароль?
        </button>
        <ui-base-button
          class="auth__button"
          title="Войти"
          :error="errorButton"
          :loader="loaderButton"
          @click="login"
        />
      </div>
    </ui-form-item>
    <div class="auth__social">
      <div>
        Или войти с помощью
      </div>
      <ul>
        <li><a href="#"><img src="~/assets/img/vk-icon.svg" alt="vk-icon" width="41" height="41"></a></li>
        <li><a href="#"><img src="~/assets/img/google-plus-icon.svg" alt="google-plus-icon" width="41" height="41"></a></li>
        <li><a href="#"><img src="~/assets/img/apple-icon.svg" alt="apple-icon" width="41" height="41"></a></li>
        <li><a href="#"><img src="~/assets/img/facebook-icon.svg" alt="facebook-icon" width="41" height="41"></a></li>
        <li><a href="#"><img src="~/assets/img/telegram-icon.svg" alt="telegram-icon" width="41" height="41"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { TheMask } from 'vue-the-mask'
import { isPhone } from '~/utils/validationUtils'
import FormMixin from '~/mixins/FormMixin'
import ModalMixin from '@/mixins/ModalMixin'

export default {
  name: 'Authorization',
  components: {
    TheMask
  },
  mixins: [
    FormMixin,
    ModalMixin
  ],
  data () {
    return {
      defaultData: {
        phone: '',
        password: ''
      }
    }
  },
  validations () {
    return {
      data: {
        phone: {
          required,
          isPhone
        },
        password: {
          required,
          minLength: minLength(8)
        }
      }
    }
  },
  methods: {
    async login () {
      if (!this.beforeSubmit()) {
        return
      }
      await this.$auth.loginWith('laravelSanctum', {
        data: this.data
      }).finally(() => {
        this.loaderButton = false
      }).then(() => {
        this.$router.push('/profile')
      }).catch((error) => {
        const textError = this.getResponseErrorMessage(error.response)
        if (textError === 'Unauthenticated.') {
          this.showModalError('Пароль не верный', 'Ошибка авторизации')
        } else {
          this.showModalError(textError)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
