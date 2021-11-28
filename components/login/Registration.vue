<template>
  <div class="auth__body">
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
      :error="$v.data.confirm.$error"
    >
      <input v-model="$v.data.confirm.$model" type="password" class="base-input" placeholder="Не менее 6 цифр">
      <template #error>
        <small v-if="!$v.data.confirm.required">Обязательное поле</small>
        <small v-if="!$v.data.confirm.sameAsPassword">Пароли должны совпадать</small>
      </template>
    </ui-form-item>
    <ui-form-item>
      <div class="auth__action">
        <ui-base-button :error="errorButton" :loader="loaderButton" @click="getSmsCode">
          Регистрация
        </ui-base-button>
      </div>
    </ui-form-item>
  </div>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import { TheMask } from 'vue-the-mask'
import { isPhone } from '~/utils/validationUtils'
import FormMixin from '~/mixins/FormMixin'

export default {
  name: 'Registration',
  components: {
    TheMask
  },
  mixins: [FormMixin],
  data () {
    return {
      defaultData: {
        name: '',
        phone: '',
        password: '',
        confirm: '',
        smsCode: ''
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
        confirm: {
          required,
          sameAsPassword: sameAs('password')
        }
      }
    }
  },
  methods: {
    getSmsCode () {
      if (!this.beforeSubmit()) {
        return
      }
      this.loaderButton = false
    }
  }
}
</script>

<style scoped>

</style>
