<template>
  <div class="auth__body">
    <div class="auth__title section-title section-title_substrate">
      Мы рады видеть вас <span>снова!</span>
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
      <input v-model="$v.data.password.$model" type="password" class="base-input" placeholder="Не менее 6 символов">
      <template #error>
        <small v-if="!$v.data.password.required">Обязательное поле</small>
        <small v-if="!$v.data.password.minLength">Минимальная длина 6 символов</small>
      </template>
    </ui-form-item>
    <ui-form-item class="text-center">
      <ui-base-button
        title="Войти"
        :error="errorButton"
        :loader="loaderButton"
        @click="login"
      />
    </ui-form-item>
    <ui-form-item>
      <div class="auth__action auth__action_no-back">
        <span class="auth__forgot">Впервые у нас?</span>
        <ui-base-button
          class="auth__button"
          title="Регистрация"
          @click="$emit('changeActionForm', 'LoginRegistration')"
        />
      </div>
    </ui-form-item>
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
          minLength: minLength(6)
        }
      }
    }
  },
  methods: {
    async login () {
      if (!this.beforeSubmit()) {
        return
      }
      const data = {
        phone: '7' + this.data.phone,
        password: this.data.password
      }
      await this.$auth.loginWith('laravelSanctum', {
        data
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
