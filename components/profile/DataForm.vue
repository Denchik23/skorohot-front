<template>
  <div class="profile__data substrate">
    <div class="profile__avatar">
      <img src="@/assets/img/ava-girls.png" alt="user avatar" width="300" height="300">
    </div>
    <ui-form-item
      :error="$v.data.name.$error"
    >
      <div class="input-icon">
        <input v-model="$v.data.name.$model" type="text" class="base-input" disabled="disabled">
        <i class="icon-edit" />
      </div>
      <template #error />
    </ui-form-item>
    <ui-form-item
      label="Мой номер"
      :error="$v.data.phone.$error"
      required
    >
      <div class="input-icon">
        <the-mask
          id="phone"
          ref="phone"
          v-model="$v.data.phone.$model"
          name="phone"
          mask="+# (###) ###-##-##"
          class="base-input"
          placeholder="+7 (999) 888-77-55"
          type="tel"
          disabled="disabled"
        />
        <i class="icon-edit" />
      </div>
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
      <div class="input-icon">
        <input v-model="$v.data.password.$model" type="password" class="base-input" disabled="disabled">
        <i class="icon-edit" />
      </div>
      <template #error>
        <small v-if="!$v.data.password.required">Обязательное поле</small>
        <small v-if="!$v.data.password.minLength">Минимальная длина 6 символов</small>
      </template>
    </ui-form-item>
    <div class="profile__gender">
      <div class="form-item">
        <label class="form-item__label profile__label">Пол</label>
        <button class="profile__gender-button">Укажите пол</button>
      </div>
      <div class="form-item">
        <label class="form-item__label profile__label">Дата рождения</label>
        <button class="profile__gender-button">Укажите дату</button>
      </div>
    </div>
    <ui-base-button
      green
      class="modal__button"
      title="Сохранить изменения"
      :error="errorButton"
      :loader="loaderButton"
      @click="saveDataUser"
    />
  </div>
</template>

<script>
import { minLength, required } from 'vuelidate/lib/validators'
import { TheMask } from 'vue-the-mask'
import { isPhone } from '~/utils/validationUtils'
import FormMixin from '@/mixins/FormMixin'

export default {
  name: 'DataForm',
  components: {
    TheMask
  },
  mixins: [
    FormMixin
  ],
  data () {
    return {
      defaultData: {
        name: this.$auth.user.name,
        phone: this.$auth.user.phone,
        password: ''
      }
    }
  },
  validations () {
    return {
      data: {
        name: {
          required
        },
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
    saveDataUser () {
      if (!this.beforeSubmit()) {
        return
      }
      console.log(this.data)
    }
  }
}
</script>
