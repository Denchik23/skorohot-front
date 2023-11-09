<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import FormMixin from '@/mixins/FormMixin'
import ModalMixin from '@/mixins/ModalMixin'

export default {
  name: 'Feedback',
  mixins: [
    FormMixin,
    ModalMixin
  ],
  data () {
    return {
      data: null,
      defaultData: {
        name: '',
        email: '',
        comment: ''
      }
    }
  },
  validations () {
    return {
      data: {
        name: {
          maxlength: maxLength(255)
        },
        email: {
          required,
          email
        },
        comment: {
          required,
          minLength: minLength(6)
        }
      }
    }
  },
  methods: {
    ...mapActions({
      send: 'feedback/send'
    }),
    sendMessages () {
      if (!this.beforeSubmit()) {
        return
      }
      this.send(this.data).finally(() => {
        this.loaderButton = false
      }).then(() => {
        this.$modal.hide('modal-feedback')
        this.formCleaning()
        this.showModalInfo('Отправлено!')
      }).catch((errorMessage) => {
        this.showModalError(errorMessage)
      })
    }
  }
}
</script>

<template>
  <modal-base-modal name="modal-feedback" title="Обратная связь">
    <ui-form-item
      label="Ваше Имя"
      :error="$v.data.name.$error"
    >
      <input v-model="$v.data.name.$model" type="text" class="base-input">
      <template #error>
        <small v-if="!$v.data.name.maxlength">Максимально 255 символов</small>
      </template>
    </ui-form-item>
    <ui-form-item
      label="E-mail"
      :error="$v.data.email.$error"
      required
    >
      <input v-model="$v.data.email.$model" type="text" class="base-input">
      <template #error>
        <small v-if="!$v.data.email.required">Обязательное поле</small>
        <small v-if="!$v.data.email.email">Некорректный E-mail</small>
      </template>
    </ui-form-item>
    <ui-form-item
      label="Комментарий"
      :error="$v.data.comment.$error"
      required
    >
      <textarea
        v-model="$v.data.comment.$model"
        rows="3"
        class="base-input"
        placeholder="Ваш комментарий..."
      />
      <template #error>
        <small v-if="!$v.data.comment.required">Обязательное поле</small>
        <small v-if="!$v.data.name.minlength">Минимально 6 символов</small>
      </template>
    </ui-form-item>
    <ui-base-button
      class="modal__button"
      title="Сохранить"
      :error="errorButton"
      :loader="loaderButton"
      @click="sendMessages"
    />
  </modal-base-modal>
</template>

<style scoped lang="scss">

</style>
