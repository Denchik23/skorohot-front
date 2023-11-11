<template>
  <div class="profile__data substrate">
    <div class="profile__avatar">
      <img :src="getGenderAvatar" alt="user avatar" width="300" height="300">
    </div>
    <ui-form-item
      :error="$v.data.name.$error"
      required
    >
      <input v-model="$v.data.name.$model" type="text" class="base-input" :disabled="isSmsCodeSent">
      <template #error>
        <small v-if="!$v.data.name.required">Обязательное поле</small>
      </template>
    </ui-form-item>
    <ui-form-item
      label="Мой номер"
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
        :disabled="isSmsCodeSent"
      />
      <template #error>
        <small v-if="!$v.data.phone.required">Обязательное поле</small>
        <small v-if="!$v.data.phone.isPhone">Не корретный телефон</small>
      </template>
    </ui-form-item>
    <ui-form-item
      label="Новый пароль"
      :error="$v.data.newPassword.$error"
    >
      <input v-model="$v.data.newPassword.$model" type="password" class="base-input" :disabled="isSmsCodeSent">
      <template #error>
        <small v-if="!$v.data.newPassword.minLength">Минимальная длина 6 символов</small>
      </template>
    </ui-form-item>
    <div class="profile__gender">
      <ui-base-radio-group
        v-model="data.gender"
        name="gender"
        :is-mini="true"
        :options="genderOptions"
        label="Пол"
      />
      <ui-form-item
        label="Дата рождения"
        :error="$v.data.birth.$error"
      >
        <input v-model="$v.data.birth.$model" type="date" class="base-input" :disabled="isSmsCodeSent">
        <template #error>
          <small v-if="!$v.data.birth.minLength">Некорректная дата</small>
        </template>
      </ui-form-item>
    </div>
    <div v-if="isSmsCodeSent">
      <div class="intro">
        На номер телефона <strong>+7{{ data.phone }}</strong> придет смс для подтверждения
      </div>
      <ui-form-item
        label="Код из sms"
        :error="$v.data.code.$error"
        required
      >
        <the-mask
          id="sms-code"
          ref="sms-code"
          v-model="$v.data.code.$model"
          name="sms-code"
          mask="######"
          class="base-input"
          type="text"
        />
        <template #error>
          <small v-if="!$v.data.code.required">Обязательное поле</small>
        </template>
      </ui-form-item>
    </div>
    <div class="text-center">
      <ui-base-button
        green
        class="modal__button"
        title="Сохранить изменения"
        :error="errorButton"
        :loader="loaderButton"
        @click="saveDataUser"
      />
      <button class="profile__destroy-button" @click="$modal.show('modal-destroy-profile')">
        Удалить профиль
      </button>
    </div>
  </div>
</template>

<script>
import { minLength, required, requiredIf } from 'vuelidate/lib/validators'
import { TheMask } from 'vue-the-mask'
import { isPhone } from '~/utils/validationUtils'
import FormMixin from '@/mixins/FormMixin'
import GenderAvatar from '@/mixins/GenderAvatar'
import ModalMixin from '@/mixins/ModalMixin'
import { genderOptions } from '@/vocabularies/options'

export default {
  name: 'DataForm',
  components: {
    TheMask
  },
  mixins: [
    FormMixin,
    GenderAvatar,
    ModalMixin
  ],
  data () {
    return {
      genderOptions,
      isSmsCodeSent: false,
      defaultData: {
        id: this.$auth.user.id,
        name: this.$auth.user.name,
        phone: this.$auth.user.phone,
        newPassword: null,
        gender: this.$auth.user.gender,
        birth: this.$auth.user.birth,
        code: null
      }
    }
  },
  validations () {
    return {
      data: {
        id: {
          required
        },
        name: {
          required
        },
        phone: {
          required,
          isPhone
        },
        newPassword: {
          minLength: minLength(6)
        },
        birth: {
          // todo валидировать дату
        },
        code: {
          required: requiredIf(() => this.isSmsCodeSent),
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
      const data = Object.assign({}, this.data)
      data.phone = '7' + this.data.phone
      this.$store.dispatch('profile/saveData', data).then((data) => {
        if (typeof data.success !== 'undefined' && data.success) {
          this.isSmsCodeSent = true
        } else {
          this.$auth.setUser(data)
          this.showModalInfo('Данные успешно сохранены')
          this.isSmsCodeSent = false
        }
      }).finally(() => {
        this.loaderButton = false
      }).catch((errorMessage) => {
        this.showModalError(errorMessage)
      })
    }
  }
}
</script>
