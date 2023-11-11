<script>
import { mapActions } from 'vuex'
import ModalMixin from '@/mixins/ModalMixin'

export default {
  name: 'DestroyProfile',
  mixins: [ModalMixin],
  data () {
    return {
      bonusDishes: [],
      isLoaderButtonDestroy: false
    }
  },
  methods: {
    ...mapActions({
      destroyProfile: 'profile/destroyProfile'
    }),
    clickDestroyProfile () {
      this.isLoaderButtonDestroy = true
      this.destroyProfile(this.$auth.user.id).finally(() => {
        this.isLoaderButtonDestroy = false
      }).then(() => {
        this.$modal.hide('modal-destroy-profile')
        this.$auth.reset()
        this.$router.push('/')
        this.showModalInfo('Профиль удален!')
      }).catch((errorMessage) => {
        this.showModalError(errorMessage)
      })
    }
  }
}
</script>

<template>
  <modal-base-modal name="modal-destroy-profile" title="Удалить профиль?">
    <div class="modal__subtitle intro">
      Удаление профиля приведет к потере всей истории заказов!
    </div>
    <div class="modal-destroy-profile">
      <ui-base-button
        green
        class="modal__button"
        title="Удалить"
        :loader="isLoaderButtonDestroy"
        @click="clickDestroyProfile"
      />
      <ui-base-button
        class="modal__button"
        title="Отмена"
        @click="$modal.hide('modal-destroy-profile')"
      />
    </div>
  </modal-base-modal>
</template>

<style scoped lang="scss">
.modal-destroy-profile {
  > button:last-child {
    margin: 15px 0 0 0;
  }
  @include media-tablet {
    display: flex;
    > button:last-child {
      margin: 0 auto;
    }
  }
}
</style>
